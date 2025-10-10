import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { schemaTypes } from "./schemaTypes";

export default defineConfig({
  name: "default",
  title: "Red Lotus Studio",

  projectId: "pcffiti5",
  dataset: "production",

  plugins: [visionTool()],

  schema: {
    types: schemaTypes,
  },
});
