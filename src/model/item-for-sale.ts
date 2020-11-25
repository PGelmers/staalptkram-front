import {User} from './user';
import {Image} from './image';

export class ItemForSale {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  images: Image[];
  user: User;
}
