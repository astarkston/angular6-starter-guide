import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { MainModule } from './app/app.module';
import { environment } from './environments/environment';
import { EnvironmentTypes } from './environments/environment-types';

if (environment.environmentType === EnvironmentTypes.Prod) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(MainModule)
  .catch(err => console.log(err));
