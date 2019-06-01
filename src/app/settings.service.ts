import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

interface Config {
  url: string;
}

@Injectable()
export class SettingsService {
  url: string;

  constructor(private http: HttpClient) { }

  load(): Promise<any> {
    return this.http.get<Config>('/assets/config.json')
      .toPromise()
      .then(res => {
        this.url = res.url;

        return res;
      });
  }
}
