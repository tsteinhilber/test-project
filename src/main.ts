import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './app/';
import { TestProjectAppComponent} from './app/';
import {ROUTER_PROVIDERS} from '@angular/router';
import { 
  FIREBASE_PROVIDERS, 
  defaultFirebase,  
  firebaseAuthConfig,
  AuthMethods,
  AuthProviders, 
  AngularFire 
} from 'angularfire2';

if (environment.production) {
  enableProdMode();
}

bootstrap(TestProjectAppComponent, [
  ROUTER_PROVIDERS,
  FIREBASE_PROVIDERS,
  defaultFirebase('angularfire-seed-test.firebaseio.com'),
  firebaseAuthConfig ({
    method: AuthMethods.Popup,
    provider: AuthProviders.Password
  })
]);
