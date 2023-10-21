import gql from "graphql-tag";

export const typeDefs = gql`
  """
  Query entry point
  """
  type Query {
    "Get tracks array for homepage grid"
    tracksForHome: [Track!]!
    author(authorId: ID): Author!
    "Returns Track details by ID, can be null"
    track(trackId: ID!): Track!
    module(moduleId: ID!): Module!
  }

  "Mutation entry point"
  type Mutation {
    incrementTrackViews(trackId: ID!): IncrementTrackViewsResponse!
  }

  " A track is a group of Modules that teaches about a specific topic "
  type Track {
    id: ID!
    title: String!
    "The Author of a Track , has name, photo and id"
    author: Author!
    thumbnail: String
    "Duration of a Track in minutes"
    duration: Int
    "How many modules the Track has"
    modulesCount: Int
    "The track's complete description, can be in Markdown format"
    description: String
    "The number of times a track has been viewed"
    numberOfViews: Int
    "The track's complete array of Modules"
    modules: [Module!]!
  }
  "Author of a complete Track or a Module"
  type Author {
    id: ID!
    name: String!
    "URL src for the picture of the Author, can be null"
    photo: String
  }
  "A Module is a single unit of teaching. Multiple Modules compose a Track"
  type Module {
    id: ID!
    "The Module's title"
    title: String!
    "The Module's length in seconds"
    length: Int!
    "The Track this module belongs to, its just one, can be null"
    track: Track
    "The Author of the module"
    author: Author!
    topic: String!
    content: String!
    videoUrl: String!
  }

  "Return type for Track Views increment Mutation"
  type IncrementTrackViewsResponse {
    "Similar to HTTP status code, represents the status of the mutation"
    code: Int!
    "Indicates whether the mutation was successful"
    success: Boolean!
    "Human-readable message for the UI"
    message: String!
    "Newly updated track after a successful mutation"
    track: Track
  }
`;
