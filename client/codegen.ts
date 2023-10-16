import { CodegenConfig } from "@graphql-codegen/cli";
import { API_URL } from "./src/constants";

const config: CodegenConfig = {
  documents: ["src/graphql/*.ts"],
  generates: {
    "./src/__generated__/": {
      preset: "client",
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
  schema: API_URL,
  // ignoreNoDocuments: true,
};
export default config;
