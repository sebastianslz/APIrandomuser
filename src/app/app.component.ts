import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  API_URL = "https://randomuser.me/api/?results=20"
  users;  


  constructor(private http: HttpClient){}

  ngOnInit(): void{
    this.http.get(this.API_URL).subscribe(data => {
      //console.log(data);
      this.users = data.results;
    });
  }
}
