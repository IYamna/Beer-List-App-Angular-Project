import { Component } from '@angular/core';
import { BeerListComponent } from './beer-list/beer-list.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'beer-list-app';
}
