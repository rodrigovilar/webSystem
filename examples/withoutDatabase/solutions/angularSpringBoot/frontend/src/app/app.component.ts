import { Component } from '@angular/core';
import { MessageService } from './message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Loading...';

  url = 'http://localhost/api/message';
 
  constructor(private api: MessageService) {
  }
 
  ngOnInit() {
    this.api
      .getMessage(this.url)
      .subscribe(
        data => {
          console.log(data);
          this.title = data;
        },
        err => {
          console.log(err);
        }
      );
  }
}
