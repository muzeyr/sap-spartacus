import { B2cStorefrontModule } from '@spartacus/storefront';
import { translationChunksConfig } from '@spartacus/assets';
import { translations } from '@spartacus/assets';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component'; 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    B2cStorefrontModule.withConfig({
      backend: {
        occ: {
          baseUrl: 'https://api.c39j2-walkersde1-d4-public.model-t.cc.commerce.ondemand.com/',
          prefix: '/rest/v2/'
        }
      },
    context: {
      currency:  ['USD'],
      langulage: ['en'],
      baseSite:  ['electronics-spa']
     },
      i18n: {
        resources: translations,
        chunks: translationChunksConfig,
        fallbackLang: 'en'
      },
      features: {
        level: '1.4'
      } 
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
