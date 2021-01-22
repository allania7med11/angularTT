import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-tour-of-heroes';
  message: Object = { proxy: "nothing" };
  constructor(private _http: HttpService) { }
  // ngOnInit() {
  //   this._http.getMessage().subscribe(data => {
  //     this.message = data
  //     console.log(this.message);
  //   })
  // }
}
