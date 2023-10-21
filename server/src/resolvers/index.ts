import { Resolvers } from "../types";
import { authorResolver } from "./author";
import { moduleResolver } from "./module";
import {
  incrementTrackViewResolver,
  trackModulesResolver,
  trackResolver,
  tracksForHomeResolver,
} from "./track";

export const resolvers: Resolvers = {
  Query: {
    author: authorResolver,
    module: moduleResolver,
    tracksForHome: tracksForHomeResolver,
    track: trackResolver,
  },
  Mutation: {
    incrementTrackViews: incrementTrackViewResolver,
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
