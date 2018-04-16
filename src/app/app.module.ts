import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { Configuration } from './configuration';
import { AppComponent } from './app.component';

export function appConfigFactory(config: Configuration) {
  return () => config.AppInit();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [Configuration,
    {
      provide: APP_INITIALIZER,
      useFactory: appConfigFactory,
      deps: [Configuration],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
