import gql from "graphql-tag";

export const typeDefs = gql`
  """
  Main file schema definitions
  """
  type Query {
    "Get tracks array for homepage grid"
    tracksForHome: [Track!]!
  }

  " A track is a group of Modules that teaches about a specific topic "
  type Track {
    id: ID!
    title: String!
    "The Author of a Track , has name, photo and id"
    author: Author!
    thumbnail: String
    "Duration of a Track in seconds"
    duration: Int
    "How many modules the Track has"
    modulesCount: Int
  }
  "Author of a complete Track or a Module"
  type Author {
    id: ID!
    name: String!
    "URL src for the picture of the Author, can be null"
    photo: String
  }
`;
