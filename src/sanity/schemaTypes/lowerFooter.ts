import { defineField, defineType } from "sanity";

export const lowerFooterType = defineType({
  name: "lowerFooter",
  type: "document",
  title: "Lower Footer",

  fields: [
    defineField({
      name: "text",
      type: "string",
      title: "Text",
    }),

    defineField({
      name: "icons",
      type: "array",
      title: "Icons",
      of: [
        defineField({
          name: "icon",
          type: "object",
          fields: [
            {
              name: "id",
              type: "string",
              title: "Id",
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
              type: "string",
              title: "Alt",
            },
            {
              name: "href",
              type: "string",
              title: "Href",
            },
          ],
        }),
      ],
    }),
  ],
});
