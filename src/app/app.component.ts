import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-tour-of-heroes';
  constructor(private _http: HttpService) { }
  ngOnInit() {
    let res = this._http.myMethod();
    console.log({res})
  }
}
