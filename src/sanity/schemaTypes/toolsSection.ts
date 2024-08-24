import { defineField, defineType } from "sanity";

export const toolsSectionType = defineType({
  name: "toolsSection",
  type: "document",
  title: "Tools Section",

  fields: [
    defineField({
      name: "label",
      type: "string",
      title: "Label",
    }),
    defineField({
      name: "title",
      type: "string",
      title: "Title",
    }),

    defineField({
      name: "description",
      type: "string",
      title: "Description",
    }),

    defineField({
      name: "image",
      type: "image",
      title: "Image",
      options: {
        hotspot: true,
      },
    }),
  ],
});
