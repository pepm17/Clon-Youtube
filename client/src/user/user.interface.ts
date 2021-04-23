export interface User {
  _id: string;
  username: string;
  email: string;
  photo: string | FileList | File;
}

export interface RegisterUser extends User{
  password: string;
  confirmPassword: string;
}

export interface UserReturned extends User {
  password: string;

}

export interface LoginUser{
  user: User;
  token: string;
  photo: string;
}