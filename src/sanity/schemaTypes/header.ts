import { defineField, defineType } from "sanity";

export const headerType = defineType({
  name: "header",
  type: "document",
  title: "Header",

  fields: [
    defineField({
      name: "logo",
      type: "string",
      title: "Logo",
    }),
    defineField({
      name: "navLinks",
      type: "array",
      title: "Navigation Links",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              type: "string",
              title: "Name",
            },
            {
              name: "href",
              type: "string",
              title: "Link / Route",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "cta1",
      type: "string",
      title: "CTA1",
    }),
    defineField({
      name: "cta2",
      type: "string",
      title: "CTA2",
    }),
  ],
});
