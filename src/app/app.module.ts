import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { SettingsService } from './settings.service';

export function loadSettings(settings: SettingsService) {
   return () => settings.load();
}

@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, HttpClientModule, FormsModule, MaterialModule ],
  declarations: [ AppComponent ],
  providers: [
    SettingsService,
    {
      provide: APP_INITIALIZER,
      useFactory: loadSettings,
      deps: [SettingsService], 
      multi: true
    }
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
