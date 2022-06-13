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

export interface PasswordData {
  oldPassword: string,
  newPassword: string
}

export interface SearchUserData {
  login: string
}

export interface ProfileData {
  first_name: string,
  second_name: string,
  display_name: string,
  login: string,
  email: string,
  phone: string
}

export interface ChatListData {
  title: string | undefined
}

export interface AddChatData {
  title: string
}

export interface UsersData {
  users: number[]
  chatId: number | string
}

export interface RemoveChatData {
  chatId: number | string
}