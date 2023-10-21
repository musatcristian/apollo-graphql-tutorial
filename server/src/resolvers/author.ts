import { DataSourceContext } from "../context";
import { AuthorModel, ModuleModel, TrackModel } from "../models";
import { Resolver, ResolverTypeWrapper } from "../types";

export const authorResolver: Resolver<
  ResolverTypeWrapper<AuthorModel>,
  TrackModel | ModuleModel,
  DataSourceContext,
  { authorId?: string }
> = (parent, args, context, info) => {
  const { authorAPI } = context.dataSource;

  const authorId: string | undefined = args.authorId || parent.authorId;

  if (!authorId) {
    throw new Error("No Track ID was provided");
  }
  return authorAPI.getAuthor(authorId);
};
