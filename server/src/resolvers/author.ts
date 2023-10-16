import { DataSourceContext } from "../context";
import { AuthorModel, TrackModel } from "../models";
import { Resolver, ResolverTypeWrapper } from "../types";

export const authorResolver: Resolver<
  ResolverTypeWrapper<AuthorModel>,
  TrackModel,
  DataSourceContext,
  {}
> = (parent, args, context, info) => {
  const { authorAPI } = context.dataSource;
  const { authorId } = parent;
  return authorAPI.getAuthor(authorId);
};
