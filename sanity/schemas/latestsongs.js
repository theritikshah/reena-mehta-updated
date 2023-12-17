import { defineField } from "sanity";

export const latestsongs = {
  name: "latestsongs",
  title: "Latest Songs",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "artist",
      title: "Artist",
      type: "string",
    },
    // {
    //   name: "albumimage",
    //   title: "Album image",
    //   type: "image",
    //   options: {
    //     hotspot: true,
    //   },
    // },
    defineField({
      name: "albumlink",
      title: "Album Link",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          scheme: ["http", "https"], // Specify allowed URL schemes here
        }).error("Please enter a valid URL starting with http:// or https://"),
    }),
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
  ],
};
