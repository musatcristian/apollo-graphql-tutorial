import { Resolvers } from "../types";
import { authorResolver } from "./author";
import { tracksForHomeResolver } from "./track";

export const resolvers: Resolvers = {
  Query: {
    // returns an array of Tracks that will be used to populate
    // the homepage grid of our web clien
    tracksForHome: tracksForHomeResolver,
  },
  Track: {
    author: authorResolver,
  },
};
