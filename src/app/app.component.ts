import { Component, Inject } from '@angular/core';
import { ConfigSettings, APP_CONFIG } from './config';
import { DependentConfigSettings } from './dependent-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'AppConfigDemo';

  globalSettings: ConfigSettings;
  dependentSettings: DependentConfigSettings;

  constructor(@Inject(APP_CONFIG)settings: ConfigSettings, dependentSettings: DependentConfigSettings){
    this.globalSettings = settings;
    this.dependentSettings = dependentSettings;

  }
}
