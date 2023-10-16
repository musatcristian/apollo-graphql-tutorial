import { Resolvers } from "../types";
import { authorResolver } from "./author";
import {
  trackModulesResolver,
  trackResolver,
  tracksForHomeResolver,
} from "./track";

export const resolvers: Resolvers = {
  Query: {
    // returns an array of Tracks that will be used to populate
    // the homepage grid of our web clien
    tracksForHome: tracksForHomeResolver,
    track: trackResolver,
  },
  Track: {
    author: authorResolver,
    modules: trackModulesResolver,
  },
};
