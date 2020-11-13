import {Injectable} from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
// import {Message} from '../model/message';

// @ts-ignore
@Injectable({
  providedIn: 'root'
})

export class MessageServiceService {
// Declare SockJS and Stomp

  constructor() {
    this.initializeWebSocketConnection();
  }

  public stompClient;
  public msg = [];

  // tslint:disable-next-line:typedef
  initializeWebSocketConnection() {
    const serverUrl = 'http://localhost:8080/socket';
    const ws = new SockJS(serverUrl);
    this.stompClient = Stomp.over(ws);

    this.stompClient.connect({}, () => {
      this.stompClient.subscribe(
        '/chat/' + '20' + '/queue/messages', (message) => {
          if (message.body) {
            this.msg.push(message.body);
          }
        }
      );
    });
  }

  // tslint:disable-next-line:typedef
  sendMessage(message) {
    // const messageObj: Message = {
    //   chat: {chatId: 20},
    //   message: 'Rune, Jaap en Erik'
    // };
    this.stompClient.send('/app/send/message', {}, message);
  }
}
