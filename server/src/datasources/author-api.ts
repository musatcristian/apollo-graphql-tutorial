import { RESTDataSource } from "@apollo/datasource-rest";
import { BASE_DATASOURCE_URL } from "../constants";
import { AuthorModel } from "../models";

export class AuthorAPI extends RESTDataSource {
  baseURL?: string = BASE_DATASOURCE_URL;

  async getAuthor(authorId: string) {
    return await this.get<AuthorModel>(
      `author/${encodeURIComponent(authorId)}`
    );
  }
}
