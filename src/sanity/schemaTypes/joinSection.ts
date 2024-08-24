import { defineType } from "sanity";

export const joinSectionType = defineType({
  name: "joinSection",
  type: "document",
  title: "joinSection",

  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "The main title for the Join Section.",
    },
    {
      name: "iconTextList",
      title: "Icon Text List",
      type: "array",
      of: [
        {
          type: "object",
          name: "iconText",
          title: "Icon Text Item",
          fields: [
            {
              name: "id",
              title: "ID",
              type: "string",
              description: "Unique identifier for the Icon Text Item.",
            },
            {
              name: "icon",
              type: "image",
              title: "Icon",
              options: {
                hotspot: true,
              },
            },
            {
              name: "alt",
              title: "Alt Text",
              type: "string",
              description:
                "Alternative text for the icon image, for accessibility purposes.",
            },
            {
              name: "width",
              title: "Width",
              type: "number",
              description: "Width of the icon image in pixels.",
            },
            {
              name: "height",
              title: "Height",
              type: "number",
              description: "Height of the icon image in pixels.",
            },
            {
              name: "text",
              title: "Text",
              type: "string",
              description: "Text to display alongside the icon.",
            },
          ],
        },
      ],
    },
  ],
});
