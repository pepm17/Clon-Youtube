export interface UserLogin {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ReturnUserLogin {
  id: string;
  username: string;
  email: string;
}

export interface UserWithToken {
  token: string;
  user: ReturnUserLogin;
}

export interface UserRegister {
  username: string;
  email: string;
  password: string;
  photo: string;
}
