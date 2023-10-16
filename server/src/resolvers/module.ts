import { DataSourceContext } from "../context";
import { ModuleModel, TrackModel } from "../models";
import { Resolver, ResolverTypeWrapper } from "../types";

export const moduleResolver: Resolver<
  ResolverTypeWrapper<ModuleModel>,
  TrackModel,
  DataSourceContext,
  { moduleId: string }
> = (parent, args, context, info) => {
  const { moduleAPI } = context.dataSource;

  return moduleAPI.getModule(args.moduleId);
};
