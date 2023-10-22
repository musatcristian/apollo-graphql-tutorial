import { DataSourceContext } from "../context";
import {
  IncrementTrackViewsResponseModel,
  ModuleModel,
  TrackModel,
} from "../models";
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
  ModuleModel,
  DataSourceContext,
  { trackId?: string }
> = (parent, args, context, info) => {
  const { trackAPI } = context.dataSource;
  const trackId: string | undefined = args.trackId || parent.trackId;

  if (!trackId) {
    throw new Error("No Track ID was provided");
  }

  return trackAPI.getTrack(trackId);
};

export const trackModulesResolver: Resolver<
  ResolverTypeWrapper<ModuleModel>[],
  TrackModel,
  DataSourceContext
> = (parent, args, context, info) => {
  const { trackAPI } = context.dataSource;
  const { id: trackId } = parent;

  return trackAPI.getTrackModules(trackId);
};

export const incrementTrackViewResolver: Resolver<
  IncrementTrackViewsResponseModel,
  {},
  DataSourceContext,
  { trackId: string }
> = async (parent, args, context, info) => {
  const { trackAPI } = context.dataSource;
  const { trackId } = args;

  try {
    const track = await trackAPI.incrementTrackViews(trackId);

    return {
      code: 200,
      message: `Views for track ${track.title} have been incremented`,
      success: true,
      track,
    };
  } catch (err) {
    return {
      code: err.extensions.response.status,
      success: false,
      message: err.extensions.response.body,
      track: null,
    };
  }
};
