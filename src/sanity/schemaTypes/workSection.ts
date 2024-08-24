import { defineField, defineType } from "sanity";

export const workSectionType = defineType({
  name: "workSection",
  type: "document",
  title: "Work Section",

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
