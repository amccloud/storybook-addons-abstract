import * as Abstract from "abstract-sdk";
import * as React from "react";
import queryString from "query-string";
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

type AddonOptions = {
  theme?: "light" | "dark" | "system",
  chromeless?: boolean
};

export function Panel() {
  const { storyId } = useStorybookState();
  const params = useParameter<(Abstract.ShareDescriptor | Abstract.ShareUrlDescriptor) & {
    options?: AddonOptions  
  }>(
    PARAM_KEY
  );

  // Ignore stories without abstract parameters
  if (!params) return null;

  const  { options = {}, ...shareDescriptor } = params;

  return React.useMemo(() => {
    let shareId;

    if ("url" in shareDescriptor) {
      shareId = parseShareURL(shareDescriptor.url);
    } else if ("shareId" in shareDescriptor) {
      shareId = shareDescriptor.shareId
    }

    if (!shareId) {
      throw new Error(
        `Could not infer share id from ShareDescriptor: "${JSON.stringify(
          shareDescriptor
        )}"`
      );
    }

    const url = new URL(`/embed/${shareId}`, ABSTRACT_APP_URL);
    url.search = queryString.stringify(options);

    return (
      <Iframe src={url.toString()} />
    );
  }, [shareDescriptor, storyId]);
}
