import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

const config = defineConfig({
  name: "default",
  title: "reena-mehta-cms",
  projectId: "qnjh4t15",
  dataset: "production",
  apiVersion: "2023-03-04",
  basePath: "/admin",
  plugins: [deskTool()],
  //   schema: { types: [project] },
});

export default config;
