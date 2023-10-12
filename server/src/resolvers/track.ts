import { DataSourceContext } from "../context";
import { TrackModel } from "../models";
import { Resolver, ResolverTypeWrapper } from "../types";

export const tracksForHomeResolver: Resolver<ResolverTypeWrapper<TrackModel>[], {}, DataSourceContext, {}> = (
  parent,
  args,
  context,
  info
) => {
  // console.info(parent, args, context, info);
  const { trackAPI } = context.dataSource;
  return trackAPI.getTracksForHome();
};
