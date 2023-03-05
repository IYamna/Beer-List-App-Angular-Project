import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {
  beers: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any[]>('https://api.punkapi.com/v2/beers')
    .subscribe(beers => {
      // sort beers by date
      this.beers = beers.sort((a, b) => {
        if (a.first_brewed < b.first_brewed) {
          return 1;
        }
        if (a.first_brewed > b.first_brewed) {
          return -1;
        }
        return 0;
      });

      //this.beers = beers;

      console.log(this.beers);
    });
  }

}
