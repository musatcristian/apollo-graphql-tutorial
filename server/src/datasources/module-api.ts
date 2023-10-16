import { RESTDataSource } from "@apollo/datasource-rest";
import { BASE_DATASOURCE_URL } from "../constants";
import { ModuleModel } from "../models";

export class ModuleAPI extends RESTDataSource {
  baseURL?: string = BASE_DATASOURCE_URL;

  async getModule(moduleId: string) {
    return await this.get<ModuleModel>(
      `module/${encodeURIComponent(moduleId)}`
    );
  }
}
