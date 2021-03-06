export {};

declare global {

  type Nullable<T> = T | null | undefined;
  type Keys<T extends Record<string, unknown>> = keyof T;
  type Values<T extends Record<string, unknown>> = T[Keys<T>];

  type TStringObject = {
    [key: string]: string | undefined
  }

  type Indexed<T = any> =
    | {
        [key in string]: T
      }
    | T;

  type User = {
    id: number;
    login: string;
    firstName: string;
    secondName: string;
    displayName: string | null;
    avatar: string | null;
    phone: string;
    email: string;
  };

  type TooltipItem = {
    id: number;
    value: string;
  }

  interface AppState {
    screen: Screens | null;
    search: string;
    currentChat: {
      id: string,
      title: string,
      users: []
    } | null;
    isLoading: boolean;
    user: User | null;
    messages: [];
    appIsInited: boolean;
  }

  interface Window {
    store: Store<AppState>;
    router: Router;
  }

  interface HTMLInputElement {
    value: string,
    name: string
  }

  interface MouseEvent {
    preventDefault(): void,
    currentTarget: HTMLInputElement
  }
}

