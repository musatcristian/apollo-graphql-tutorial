import { RESTDataSource } from "@apollo/datasource-rest";
import { BASE_DATASOURCE_URL } from "../constants";
import { AuthorModel, TrackModel } from "../models";

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

  async getAuthor(authorId: string) {
    return await this.get<AuthorModel>(`author/${encodeURIComponent(authorId)}`);
  }
}
