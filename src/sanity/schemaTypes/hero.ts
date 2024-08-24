import { defineType } from "sanity";

export const heroType = defineType({
  name: "hero",
  type: "document",
  title: "Hero ",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "text",
      type: "string",
      title: "Text",
    },
    {
      name: "accentText",
      type: "string",
      title: "Accent Text",
    },
    {
      name: "highlightText",
      type: "string",
      title: "Highlight Text",
    },
    {
      name: "description",
      type: "string",
      title: "Description",
    },
    {
      name: "content",
      type: "string",
      title: "content",
    },
    {
      name: "cta1",
      type: "string",
      title: "CTA",
    },
    {
      name: "cta2",
      type: "string",
      title: "CTA",
    },

    {
      name: "image",
      type: "image",
      title: "Image",
      options: {
        hotspot: true,
      },
    },
  ],
});
