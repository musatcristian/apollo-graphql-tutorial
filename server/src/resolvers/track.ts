import { DataSourceContext } from "../context";
import { ModuleModel, TrackModel } from "../models";
import { Resolver, ResolverTypeWrapper } from "../types";

export const tracksForHomeResolver: Resolver<
  ResolverTypeWrapper<TrackModel>[],
  {},
  DataSourceContext,
  {}
> = (parent, args, context, info) => {
  // console.info(parent, args, context, info);
  const { trackAPI } = context.dataSource;
  return trackAPI.getTracksForHome();
};

export const trackResolver: Resolver<
  ResolverTypeWrapper<TrackModel>,
  {},
  DataSourceContext,
  { trackId: string }
> = (parent, args, context, info) => {
  const { trackAPI } = context.dataSource;
  const { trackId } = args;

  return trackAPI.getTrack(trackId);
};

export const trackModulesResolver: Resolver<
  ResolverTypeWrapper<ModuleModel>[],
  TrackModel,
  DataSourceContext
> = (parent, args, context, info) => {
  console.info(parent, "\ninfo", info);

  const { trackAPI } = context.dataSource;
  const { id: trackId } = parent;

  return trackAPI.getTrackModules(trackId);
};
