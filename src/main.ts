import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { ConfigSettings, APP_CONFIG } from './app/config';


fetch('/assets/config.json')
  .then(config => config.json())
  .then((settings: ConfigSettings) => {

    if (environment.production) {
      enableProdMode();
    }

    platformBrowserDynamic( [{ provide: APP_CONFIG, useValue: settings }])
    .bootstrapModule(AppModule)
      .catch(err => console.error(err));
  });
