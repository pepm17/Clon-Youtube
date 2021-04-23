export interface User {
  _id: string;
  username: string;
  email: string;
}

export interface RegisterUser extends User{
  password: string;
  confirmPassword: string;
}
