import { defineField, defineType } from "sanity";

export const targetSectionType = defineType({
  name: "targetSection",
  type: "document",
  title: "Target Section",

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
      name: "highlight",
      type: "string",
      title: "HightLight",
    }),
    defineField({
      name: "text",
      type: "string",
      title: "Text",
    }),
    defineField({
      name: "description",
      type: "string",
      title: "Description",
    }),
    defineField({
      name: "content",
      type: "string",
      title: "Content",
    }),
    defineField({
      name: "buttonText",
      type: "string",
      title: "Button Text",
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
