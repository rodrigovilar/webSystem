import { Component } from '@angular/core';
import { MessageService } from './message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Loading...';

  constructor(private api: MessageService) {
  }

  ngOnInit() {
    this.api
      .getMessage().valueChanges.subscribe(result => {
      console.log(result.data.getMessages[0].content);
    });
  }
}
