import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  message: string;

  constructor(service: AppService) {
    service.messageChanged$.subscribe(
      message => this.message = message);
  }

}
