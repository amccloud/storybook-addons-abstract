import React from "react";
import { BlogIndex, BlogGallery, BlogPost } from "../";

export default {
  title: "Blog (CSF)",
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
