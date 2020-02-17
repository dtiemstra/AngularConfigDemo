import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_CONFIG, ConfigSettings } from './config';
import { DependentConfigSettings } from './dependent-config';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ConfigSettings,
    {
      provide: DependentConfigSettings,
      useFactory: CreateDepenentSettings,
      deps: [APP_CONFIG],
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function CreateDepenentSettings(settings: ConfigSettings): DependentConfigSettings {
  return {
    dependentValue1: 'Depending on ' + settings.configValue1
  }
}
