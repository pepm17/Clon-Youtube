export interface UserDto {
  _id: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  createdAt: Date;
  updatedAt: Date;
}
export interface RegisterUser {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  photo: string;
}
export interface LoginUser {
  _id: string;
  username: string;
  email: string;
  photo: string;
}
export interface LoginUserToken {
  _id: string;
  username: string;
  email: string;
  photo: string;
  token: string;
}
export interface ExistUser {
  username: string;
  email: string;
}
