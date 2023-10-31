import { inject, injectable } from "tsyringe";
import { PublicHttpService } from "./public.http.service";
import { PrivateHttpService } from "./private.http.service";

@injectable()
export class PlaylistService {
  constructor(
    @inject(PublicHttpService) private httpService: PublicHttpService,
    @inject(PrivateHttpService) private privateHttpService: PrivateHttpService
  ) {}
  namespace = "playlist";

  create = async (uploadPlaylist: any) => {
    return await this.privateHttpService.post(
      `${this.namespace}/create`,
      uploadPlaylist
    );
  };

  readPlaylist = async (id: string) => {
    return await this.httpService.get(`${this.namespace}/read/${id}`);
  };

  userGetAllPlaylist = async (id: string) => {
    return await this.privateHttpService.get(
      `${this.namespace}/list/user/${id}`
    );
  };

  updatePlaylist = async (updatePlaylist: any) => {
    return await this.privateHttpService.put(
      `${this.namespace}/update`,
      updatePlaylist
    );
  };

  removePlaylist = async (id: string) => {
    return await this.privateHttpService.delete(
      `${this.namespace}/remove/${id}`
    );
  };
}
