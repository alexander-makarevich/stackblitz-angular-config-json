import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  constructor(private http: HttpClient) {
    http.get('https://gorest.co.in/public-api/users?access-token=DIaiqIfU8CU1tSHR1qYWCVd6-RSRo1q7ZIdT')
      .subscribe(x => console.log(x));
  }
}
