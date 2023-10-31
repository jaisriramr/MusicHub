import { inject, injectable } from "tsyringe";
import { PublicHttpService } from "./public.http.service";
import { CreateUser, LoginUser, UpdateUser } from "../types";
import { PrivateHttpService } from "./private.http.service";

@injectable()
export class UserService {
  constructor(
    @inject(PublicHttpService) private httpService: PublicHttpService,
    @inject(PrivateHttpService) private privateHttpService: PrivateHttpService
  ) {}
  namespace = "user";

  clearLocal() {
    localStorage.clear();
  }

  register = async (createUser: CreateUser) => {
    return await this.httpService.post(
      `${this.namespace}/register`,
      createUser
    );
  };

  login = async (loginUser: LoginUser) => {
    return await this.httpService.post(`${this.namespace}/login`, loginUser);
  };

  verify = async (token: string) => {
    return await this.httpService.get(
      `${this.namespace}/verify?token=${token}`
    );
  };

  getProfile = async (email: string) => {
    return await this.httpService.get(
      `${this.namespace}/profile?email=${email}`
    );
  };

  removeUser = async (id: string) => {
    return await this.privateHttpService.delete(
      `${this.namespace}/remove/${id}`
    );
  };

  updateUser = async (updateUser: UpdateUser) => {
    return await this.privateHttpService.put(
      `${this.namespace}/update`,
      updateUser
    );
  };

  forgotPassword = async (email: string) => {
    return await this.httpService.get(
      `${this.namespace}/forgot-password?email=${email}`
    );
  };

  resetPassword = async (query: any) => {
    return await this.httpService.put(
      `${this.namespace}/reset-password`,
      query
    );
  };
}
