export interface User {
  _id: string;
  username: string;
  email: string;
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
}