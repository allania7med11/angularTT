import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-tour-of-heroes';
  brews: Object;
  constructor(private _http: HttpService) { }
  ngOnInit() {
    this._http.getBeer().subscribe(data => {
      this.brews = data
      console.log(this.brews);
    })
  }
}
