import {Chat} from './Chat';
import DateTimeFormat = Intl.DateTimeFormat;

export class Message {
  idSender: number;
  idReceiver: number;
  chat: {};
  message: string;
  timestamp: Date;
}
