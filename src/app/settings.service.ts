import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class SettingsService {
  constructor(private http: HttpClient) { }

  load(): Promise<any> {
    return this.http.get('/assets/config.json')
      .toPromise()
      .then(res => {
        console.log('Response from server API: ', res);
        return res;
      });
  }
}
