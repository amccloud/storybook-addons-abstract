import * as Abstract from "abstract-sdk";
import * as React from "react";
import { useParameter, useStorybookState } from "@storybook/api";
import { styled } from "@storybook/theming";
import { PARAM_KEY } from "./constants";

const ABSTRACT_APP_URL =
  process.env.STORYBOOK_ABSTRACT_APP_URL || "https://app.abstract.com";

const Iframe = styled.iframe({
  width: "100%",
  height: "100%",
  border: "0 none"
});

function parseShareURL(url: string): string | void {
  if (url.match(/share.(?:go)?abstract.com\//)) {
    const parsedUrl = new URL(url);
    const pathSegments = parsedUrl.pathname.split('/');
    return pathSegments[pathSegments.length - 1];
  }

  throw new Error(
    `The provided url (${url}) is not valid. The url must come from "https://share.abstract.com/" or "https://share.goabstract.com/".`,
  );
}

export function inferShareId(
  shareDescriptor: Abstract.ShareDescriptor
): string {
  let shareId: string | void;

  if ("url" in shareDescriptor) {
    shareId = parseShareURL(shareDescriptor.url);
  } else if ("shareId" in shareDescriptor) {
    shareId = shareDescriptor.shareId;
  }

  if (!shareId) {
    throw new Error(
      `Could not infer share id from ShareDescriptor: "${JSON.stringify(
        shareDescriptor
      )}"`
    );
  }

  return shareId;
}

function mergeUrlParams(base: URL, ...urls: URL[]): URL {
  const newBase = new URL('', base);

  for (const url of urls) {
    for (const [name, value] of url.searchParams.entries()) {
      newBase.searchParams.append(name, value);
    }
  }

  return newBase;
}

export function Panel() {
  const { storyId } = useStorybookState();
  const shareDescriptor = useParameter<Abstract.ShareDescriptor | void>(
    PARAM_KEY
  );

  return React.useMemo(() => {
    if (!shareDescriptor) return null;

    let url = new URL(`/embed/${inferShareId(shareDescriptor)}`, ABSTRACT_APP_URL);
    url.searchParams.append("find", storyId);

    if ("url" in shareDescriptor) {
      url = mergeUrlParams(url, new URL(shareDescriptor.url));
    }

    return (
      <Iframe src={url.toString()} />
    );
  }, [shareDescriptor, storyId]);
}
