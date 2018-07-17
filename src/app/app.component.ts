import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav-bar></nav-bar>
    <event-list></event-list>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Test application, such wow';
}
