import { Resolvers } from "../types";
import { authorResolver } from "./author";
import { moduleResolver } from "./module";
import {
  trackModulesResolver,
  trackResolver,
  tracksForHomeResolver,
} from "./track";

export const resolvers: Resolvers = {
  Query: {
    author: authorResolver,
    module: moduleResolver,
    // returns an array of Tracks that will be used to populate
    // the homepage grid of our web client
    tracksForHome: tracksForHomeResolver,
    track: trackResolver,
  },
  Track: {
    author: authorResolver,
    modules: trackModulesResolver,
  },
  Module: {
    author: authorResolver,
    track: trackResolver,
  },
};
