# Storybook addon for Abstract integration

An addon for Storybook that allows you to link to Abstract layers and collections in the storybook panel!

![Example](https://i.imgur.com/EtAb6x3.gif)

## Examples

- Storybook: https://storybook-addons-abstract.now.sh/
- Source: https://github.com/amccloud/storybook-addons-abstract/tree/master/examples

## Install

Requires [storybook@^6.0.0](https://github.com/storybookjs/storybook/blob/next/CHANGELOG.md#600-august-10-2020)

```sh
npm install storybook-addons-abstract
```

## Usage

within `main.js`:

```diff
module.exports = {
  stories: ['../src/**/*.stories.@(tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
+   'storybook-addons-abstract/register'
  ]
};
```


or using the old `addons.js`:

```js
import "storybook-addons-abstract/register";
```

with the new [Component Story Format](https://storybook.js.org/docs/formats/component-story-format/) API:

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

or using the old stories:

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

## Options

| Option       | Value                           | Default   | Description                                                       |
|--------------|---------------------------------|-----------|-------------------------------------------------------------------|
| `theme`      | `"light" \| "dark" \| "system"` | `"light"` | Control appearance of embed                                       |
| `chromeless` | `boolean`                       | `false`   | Hide embed interface, displaying only the preview until mouseover |

### Change embed background color

```js
{
  abstract: {
    url: "https://share.goabstract.com/733ca894-a4bb-43e3-a2b1-dd27ff6d00c4",
    options: {
      theme: "dark"
    }
  }
}
```

### Hide embed interface

```js
{
  abstract: {
    url: "https://share.goabstract.com/733ca894-a4bb-43e3-a2b1-dd27ff6d00c4",
    options: {
      chromeless: true
    }
  }
}
```
