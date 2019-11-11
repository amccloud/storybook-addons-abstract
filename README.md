# Storybook addon for Abstract integration

This addon for storybook allows you to link to Abstract layers and collections in the storybook panel!

![Example](https://i.imgur.com/EtAb6x3.gif)

## Install

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
