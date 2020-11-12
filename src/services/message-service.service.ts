import {Injectable} from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';

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
    const that = this;
    // tslint:disable-next-line:only-arrow-functions typedef
    this.stompClient.connect({}, function (frame) {
      that.stompClient.subscribe('/message', (message) => {
        if (message.body) {
          that.msg.push(message.body);
        }
      });
    });
  }

  // tslint:disable-next-line:typedef
  sendMessage(message) {
    this.stompClient.send('/app/send/message', {}, message);
  }
}
