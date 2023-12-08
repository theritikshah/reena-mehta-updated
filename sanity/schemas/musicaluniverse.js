import { defineField } from "sanity";

export const musicaluniverse = {
  name: "musicaluniverse",
  title: "Musical Universe",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },

    {
      name: "albumimage",
      title: "Album image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    defineField({
      name: "albumlink",
      title: "Album Link",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https"],
        }).error("Please enter a valid URL starting with http:// or https://"),
    }),
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
  ],
};
