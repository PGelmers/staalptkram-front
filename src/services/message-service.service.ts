import {Injectable} from '@angular/core';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import {Message} from '../model/message';
import {Chat} from '../model/Chat';
import {HttpClient} from '@angular/common/http';

// @ts-ignore
@Injectable({
  providedIn: 'root'
})

export class MessageServiceService {
  public stompClient;
  public msg = [];

  constructor(public http: HttpClient) {
    this.initializeWebSocketConnection();
  }

  initializeWebSocketConnection(): void {
    const serverUrl = 'http://localhost:8080/socket';
    const ws = new SockJS(serverUrl);
    this.stompClient = Stomp.over(ws);

    this.stompClient.connect({}, () => {
      this.subscribeToChat(1);
    });
  }

  sendMessage(message): void {
    const messageObj: Message = {
      idReceiver: 1,
      idSender: 2,
      chat: {id: 1},
      message,
      timestamp: new Date()
    };

    this.stompClient.send('/app/send/message', {}, JSON.stringify(messageObj));
  }

  newChat(): void {
    const chatObj: Chat = {
      userBuyer: {id: 1},
      userSeller: {id: 2},
    };

    this.http.post('http://localhost:8080/chat', chatObj).subscribe((chatId: number) => {
      // this.subscribeToChat(chatId);
    });
  }

  subscribeToChat(chatId: number): void {
    this.stompClient.subscribe(
      '/chat/' + chatId + '/queue/messages', (message) => {
        if (message.body) {
          const messageToJson = JSON.parse(message.body);
          this.msg.push(messageToJson);
        }
      }
    );
  }
}
