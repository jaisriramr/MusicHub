import { inject, injectable } from "tsyringe";
import { PublicHttpService } from "./public.http.service";

@injectable()
export class QueueService {
  constructor(
    @inject(PublicHttpService) private httpService: PublicHttpService
  ) {}
  namespace = "queue";

  create = async (createQueue: any) => {
    return await this.httpService.post(`${this.namespace}/create`, createQueue);
  };

  update = async (updateQueue: any) => {
    return await this.httpService.put(`${this.namespace}/update`, updateQueue);
  };

  read = async (id: string) => {
    return await this.httpService.get(`${this.namespace}/read/${id}`);
  };

  delete = async (id: string) => {
    return await this.httpService.delete(`${this.namespace}/remove/${id}`);
  };
}
