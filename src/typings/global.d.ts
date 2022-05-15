export {};

declare global {

  type Nullable<T> = T | null;
  type Keys<T extends Record<string, unknown>> = keyof T;
  type Values<T extends Record<string, unknown>> = T[Keys<T>];

  type TStringObject = {
    [key: string]: string | undefined
  }

  type User = {
    id: number;
    login: string;
    firstName: string;
    secondName: string;
    displayName: string;
    avatar: string;
    phone: string;
    email: string;
  };

  interface AppState {
    screen: Screens | null;
    isLoading: boolean;
    user: User | null;
  }

  interface Window {
    store: Store<AppState>;
    router: Router;
  }
}

