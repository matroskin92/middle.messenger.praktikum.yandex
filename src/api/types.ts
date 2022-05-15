import { blob } from "stream/consumers";

export interface APIError {
  reason: string
}

export interface UserDTO {
  id: number,
  email: string,
  login: string,
  phone: string,
  avatar: string | null,
  first_name: string,
  second_name: string,
  display_name: string | null
}

export interface LoginData {
  login: string,
  password: string
}

export interface SignUpData {
  first_name: string,
  second_name: string,
  login: string,
  email: string,
  password: string,
  phone: string
}

export interface UserSearch {
  login: string
}

export interface UserPassword {
  oldPassword: string,
  newPassword: string
}

export interface UserProfile {
  first_name: string,
  second_name: string,
  display_name: string,
  login: string,
  email: string,
  phone: string
}

export interface UserAvatar {
  data: typeof blob,
}

export interface ChatAdd {
  title: string
}

export interface ChatUsers {
  users: number[]
  chatId: number
}

export interface ChatRemove {
  chatId: number | string
}