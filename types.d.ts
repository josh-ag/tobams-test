export interface AppContextInterface {
  login: boolean;
  menu: MenuType[];
  carts: MenuType[];
}

export type MenuType = {
  name: string;
  amount: number;
  id: string;
  images: string[];
  variant?: string;
  details: string;
};
