import './polyfills'; // not sure this is needed
import { platformBrowser } from '@angular/platform-browser';
import { AppModuleNgFactory } from '../tmp/aot/app/app.module.ngfactory';

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
