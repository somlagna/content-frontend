import { Component } from '@angular/core';
import "bootstrap/dist/js/bootstrap.js";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sidebarVisible!: boolean;
  title = 'content_frontend';
}
