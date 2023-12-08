import { defineField } from "sanity";

export const liveconcert = {
  name: "liveconcert",
  title: "Live Concert",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
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
