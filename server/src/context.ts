import { AuthorAPI, ModuleAPI, TrackAPI } from "./datasources";

export type DataSourceContext = {
  dataSource: {
    trackAPI: TrackAPI;
    authorAPI: AuthorAPI;
    moduleAPI: ModuleAPI;
  };
};
