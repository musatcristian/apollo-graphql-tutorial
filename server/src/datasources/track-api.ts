import { RESTDataSource } from "@apollo/datasource-rest";
import { BASE_DATASOURCE_URL } from "../constants";
import { ModuleModel, TrackModel } from "../models";

export class TrackAPI extends RESTDataSource {
  baseURL = BASE_DATASOURCE_URL;

  async getTracksForHome() {
    const d = this.get<TrackModel[]>("tracks");

    const res = await d;

    const t = res.map((r) => ({
      ...r,
      duration: r.length,
    }));

    return t;
  }

  async getTrack(trackId: string) {
    return await this.get<TrackModel>(`track/${encodeURIComponent(trackId)}`);
  }

  async getTrackModules(trackId: string) {
    return await this.get<ModuleModel[]>(`track/${trackId}/modules`);
  }
}
