import { UserResponse } from "./user.model";

export interface LoginRequest {
  username: string;
  password: string;
}

export interface AuthResponse {
  access: string;
  refresh : string;
  user : UserResponse;
}