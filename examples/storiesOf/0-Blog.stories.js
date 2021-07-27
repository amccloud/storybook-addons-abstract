import { storiesOf } from "@storybook/react";
import { BlogIndex, BlogGallery, BlogPost } from "../";

// eslint-disable-next-line no-undef
storiesOf("Blog", module)
  .addParameters({
    abstract: {
      // Copy a collection or layer share url from Abstract
      url:
        "https://share.goabstract.com/733ca894-a4bb-43e3-a2b1-dd27ff6d00c4?mode=build",
    },
  })
  // Name your stories after layers in the collection
  .add("Blog Index", () => <BlogIndex />)
  .add("Blog Gallery", () => <BlogGallery />)
  .add("Blog Post", () => <BlogPost />);
