/*!

 =========================================================
 * Puliservicios - v1.0.0
 =========================================================

 * Creator Page: https://oscarbeses.com
 * Template Page: http://www.creative-tim.com/product/paper-kit-2
 * Copyright 2020 Oscar Beses (http://www.creative-tim.com)
 * Licensed under MIT (https://github.com/OscarBeses/puliservicios/blob/master/LICENSE)

 =========================================================

 */
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
