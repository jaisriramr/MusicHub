import { inject, injectable } from "tsyringe";
import { PublicHttpService } from "./public.http.service";
import { PrivateHttpService } from "./private.http.service";

@injectable()
export class TrackService {
  constructor(
    @inject(PublicHttpService) private httpService: PublicHttpService,
    @inject(PrivateHttpService) private privateHttpService: PrivateHttpService
  ) {}
  namespace = "track";

  uploadTrack = async (trackUpload: any) => {
    return await this.privateHttpService.post(
      `${this.namespace}/upload`,
      trackUpload
    );
  };

  getSingleTrack = async (id: string) => {
    return await this.httpService.get(`${this.namespace}/read/${id}`);
  };

  updateTrack = async (updateTrack: any) => {
    return await this.privateHttpService.put(
      `${this.namespace}/update`,
      updateTrack
    );
  };

  removeTrack = async (id: string) => {
    return await this.privateHttpService.delete(`${this.namespace}/${id}`);
  };
}
