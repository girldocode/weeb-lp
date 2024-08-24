import { defineField, defineType } from "sanity";

export const DesignEventsType = defineType({
  name: "designEvents",
  type: "document",
  title: "Design Events",

  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
    }),

    defineField({
      name: "cta",
      type: "string",
      title: "CTA",
    }),
    defineField({
      name: "cards",
      type: "array",
      title: "Cards",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "id",
              title: "Id",
              type: "string",
            },
            {
              name: "image",
              title: "Image",
              type: "image",
              options: {
                hotspot: true,
              },
            },

            {
              name: "label",
              type: "string",
              title: "Label",
            },

            {
              name: "text",
              type: "string",
              title: "Text",
            },

            {
              name: "cardCta",
              type: "string",
              title: "Card CTA",
            },
          ],
        },
      ],
    }),
  ],
});
