import {User} from './user';

export class ItemForSale {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  user: User;
}
