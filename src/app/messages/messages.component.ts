import {Component, OnInit} from '@angular/core';
import {MessageServiceService} from '../../services/message-service.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  title = 'staalptkram-front';
  input;

  constructor(public messageService: MessageServiceService) {
  }

  ngOnInit(): void {
  }

  sendMessage(): void {
    if (this.input) {
      this.messageService.sendMessage(this.input);
      this.input = '';
    }
  }

  newChat(): void {
    this.messageService.newChat();
  }

}
