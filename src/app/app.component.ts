import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoApp';
  user = 'İsmahan';
  items = [
    { description: "Kahvaltı", action: "No" },
    { description: "sinama", action: "No" },
    { description: "spor", action: "No" },
    { description: "Ders çalışma", action: "No" }
  ] ; }
