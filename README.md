# Storybook addon for Abstract integration

A addon for storybook that allows you to link to Abstract layers and collections in the storybook panel!

![Example](https://i.imgur.com/EtAb6x3.gif)

## Examples

- Storybook: https://storybook-addons-abstract.now.sh/
- Source: https://github.com/amccloud/storybook-addons-abstract/tree/master/examples

## Install

Requires [storybook@^5.2.0](https://github.com/storybookjs/storybook/blob/next/CHANGELOG.md#520-september-13-2019)

```sh
npm install storybook-addons-abstract
```

## Usage

within `addons.js`:

```js
import "storybook-addons-abstract/register";
```

within your stories:

```js
import React from "react";
import { storiesOf } from "@storybook/react";

storiesOf("Blog", module)
  .addParameters({
    abstract: {
      // Copy a collection or layer share url from Abstract
      url: "https://share.goabstract.com/733ca894-a4bb-43e3-a2b1-dd27ff6d00c4"
    }
  })
   // Name your stories after layers in the collection
  .add("Blog Index", () => <BlogIndex />)
  .add("Blog Gallery", () => <BlogGallery />)
  .add("Blog Post", () => <BlogPost />);
```

or using the new [Component Story Format](https://storybook.js.org/docs/formats/component-story-format/) api:

```js
import React from "react";
import { BlogIndex, BlogGallery, BlogPost } from "../";

export default {
  parameters: {
    abstract: {
      // Copy a collection or layer share url from Abstract
      url: "https://share.goabstract.com/733ca894-a4bb-43e3-a2b1-dd27ff6d00c4"
    }
  }
};

// Name your stories after layers in the collection
export const blogIndex = () => (
  <BlogIndex />
);

export const blogGallery = () => (
  <BlogGallery />
);

export const blogPost = () => (
  <BlogPost />
);
```
