import { inject, injectable } from "tsyringe";
import { PublicHttpService } from "./public.http.service";

@injectable()
export class SearchService {
  constructor(
    @inject(PublicHttpService) private httpService: PublicHttpService
  ) {}
  namespace = "search";

  searchAll = async (query: string) => {
    return await this.httpService.get(`${this.namespace}/all?query=${query}`);
  };
}
