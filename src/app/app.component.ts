import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h2> Hello mom</h2>
    <img src="/assets/images/basic-shield.png">
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test application, such wow';
}
