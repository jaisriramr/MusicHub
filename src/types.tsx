export interface CreateUser {
  name: string;
  email: string;
  password: string;
  gender: string;
  dob: string;
}

export interface LoginUser {
  email: string;
  password: string;
}

export interface UpdateUser {
  _id: string;
  name: string;
  email: string;
  gender: string;
  dob: string;
  profile_picture_url?: string;
  account_type?: string;
  listeners_count?: number;
  verified_account?: boolean;
}
