import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

const config = defineConfig({
  projectId: "xlzwaqbt",
  dataset: "production",
  title: "reena-mehta-cms",
  apiVersion: "2023-03-04",
  basePath: "/admin",
  plugins: [deskTool()],
  //   schema: { types: [project] },
});

export default config;
