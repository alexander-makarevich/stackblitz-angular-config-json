import { Component } from '@angular/core';

import { SettingsService } from './settings.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  constructor(private settingsService: SettingsService) { }
  name = 'Angular';
}
