import { DataSourceContext } from "../context";
import { TrackModel } from "../models";
import { Author, Resolver, ResolverTypeWrapper } from "../types";

export const authorResolver: Resolver<ResolverTypeWrapper<Author>, TrackModel, DataSourceContext, {}> = (
  parent,
  args,
  context,
  info
) => {
  const { trackAPI } = context.dataSource;
  const { authorId } = parent;
  return trackAPI.getAuthor(authorId);
};
