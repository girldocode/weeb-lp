import { defineType } from "sanity";

export const levelUpSectionType = defineType({
  name: "levelUpSection",
  type: "document",
  title: "Level Up Section",

  fields: [
    {
      name: "nextLevelRight",
      type: "object",
      title: "Next Level Right",
      fields: [
        {
          name: "label",
          type: "string",
          title: "Label",
        },
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
          name: "cta",
          type: "string",
          title: "CTA",
        },
      ],
    },
    {
      name: "image",
      type: "image",
      title: "Image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "testimonialCard",
      type: "object",
      title: "Testimonial Card",
      fields: [
        {
          name: "description",
          type: "string",
          title: "Description",
        },
        {
          name: "name",
          type: "string",
          title: "Name",
        },
        {
          name: "tagline",
          type: "string",
          title: "Tagline",
        },   
        {
          name: "avatar",
          type: "image",
          title: "Avatar",
          description: "Avatar image for the testimonial author",
          options: {
            hotspot: true,
          },
        },
      ],
    },
  ],
});
