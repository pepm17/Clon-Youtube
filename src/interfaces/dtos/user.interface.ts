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
}
export interface LoginUser {
  username: string;
  password: string;
}
export interface ExistUser {
  username: string;
  email: string;
}
