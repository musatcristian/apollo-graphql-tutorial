import { DataSourceContext } from "../context";
import { AuthorModel, ModuleModel, TrackModel } from "../models";
import { Resolver, ResolverTypeWrapper } from "../types";

export const authorResolver: Resolver<
  ResolverTypeWrapper<AuthorModel>,
  TrackModel | ModuleModel,
  DataSourceContext,
  {}
> = (parent, args, context, info) => {
  const { authorAPI } = context.dataSource;
  const { authorId } = parent;
  return authorAPI.getAuthor(authorId);
};
