import { defineField, defineType } from "sanity";

export const upperFooterType = defineType({
  name: "upperFooter",
  type: "document",
  title: "Upper Footer",

  fields: [
    defineField({
      name: "logo",
      type: "string",
      title: "Logo",
    }),

    defineField({
      name: "titles",
      type: "array",
      title: "Titles",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "id",
              type: "string",
              title: "Id",
            },
            {
              name: "titleName",
              type: "string",
              title: "Title Name",
            },

            {
              name: "items",
              type: "array",
              title: "Items",
              of: [
                {
                  type: "object",
                  fields: [
                    {
                      name: "id",
                      type: "string",
                      title: "Id",
                    },
                    {
                      name: "itemText",
                      type: "string",
                      title: "Item Text",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    }),
  ],
});
