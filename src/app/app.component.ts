import {Component} from '@angular/core';
import {MessageServiceService} from '../services/message-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'staalptkram-front';
  input;

  constructor(public messageService: MessageServiceService) {
  }

  sendMessage() {
    if (this.input) {
      this.messageService.sendMessage(this.input);
      this.input = '';
    }
  }
}
