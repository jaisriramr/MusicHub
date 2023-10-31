import { inject, injectable } from "tsyringe";
import { PublicHttpService } from "./public.http.service";
import { PrivateHttpService } from "./private.http.service";

@injectable()
export class CollectionService {
  constructor(
    @inject(PublicHttpService) private httpService: PublicHttpService,
    @inject(PrivateHttpService) private privateHttpService: PrivateHttpService
  ) {}
  namespace = "collection";

  createCollection = async (createCollectionQuery: any) => {
    return await this.privateHttpService.post(
      `${this.namespace}/create`,
      createCollectionQuery
    );
  };

  readSingleCollection = async (id: string) => {
    return await this.httpService.get(`${this.namespace}/read/${id}`);
  };

  listCollection = async (limit: number) => {
    return await this.httpService.get(`${this.namespace}/list?limit=${limit}`);
  };

  updateCollection = async (updateCollectionQuery: any) => {
    return await this.privateHttpService.put(
      `${this.namespace}/update`,
      updateCollectionQuery
    );
  };

  removeCollection = async (id: string) => {
    return await this.privateHttpService.delete(
      `${this.namespace}/remove/${id}`
    );
  };
}
