---
title: "Example Post with Images"
description: "This is an example showing how to include images in your blog posts"
pubDate: "2025-09-13"
slug: "example-with-images"
---

# Using Images in Your Blog Posts

This is an example of how to include images in your blog posts. 

## Basic Image Syntax

Here's how you include an image in your blog post:

![Description of the image](/images/blog/example-with-images/sample-image.jpg)

## Images with Custom Styling

For more control over the image appearance, you can use HTML:

<img src="/images/blog/example-with-images/sample-image.jpg" alt="Description of the image" class="rounded-lg shadow-md my-4" />

## Adding a Figure with Caption

<figure>
  <img 
    src="/images/blog/example-with-images/sample-image.jpg" 
    alt="Description of the image" 
    class="rounded-lg shadow-md"
  />
  <figcaption class="text-sm text-center text-gray-500 mt-2">
    This is a caption for the image
  </figcaption>
</figure>

## Image Directories

For each blog post, place your images in a corresponding directory:

1. Create a folder in `public/images/blog/` named after your post's slug
2. Add your images to that folder
3. Reference them with `/images/blog/post-slug/image-name.jpg`

For example, images for a post with slug "how-to-study" would go in `public/images/blog/how-to-study/`.