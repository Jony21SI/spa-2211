import { NgModule } from '@angular/core';
import { translationChunksConfig, translationsEn } from "@spartacus/assets";
import { FeaturesConfig, I18nConfig, OccConfig, provideConfig, SiteContextConfig } from "@spartacus/core";
import { defaultCmsContentProviders, layoutConfig, mediaConfig } from "@spartacus/storefront";

@NgModule({
  declarations: [],
  imports: [
  ],
  providers: [provideConfig(layoutConfig), provideConfig(mediaConfig), ...defaultCmsContentProviders, provideConfig(<OccConfig>{
    backend: {
      occ: {
        //baseUrl: 'https://localhost:9002',
        baseUrl: 'https://40gw5t5m-9002.usw3.devtunnels.ms',
      }
    },
  }), provideConfig(<SiteContextConfig>{
    context: {
urlParameters: ['baseSite', 'language', 'currency'],
baseSite: ['electronics-spa','apparel-uk-spa'],
currency: ['USD', 'GBP',]
},
  }), provideConfig(<I18nConfig>{
    i18n: {
      resources: { en: translationsEn },
      chunks: translationChunksConfig,
      fallbackLang: 'en'
    },
  }), provideConfig(<FeaturesConfig>{
    features: {
      level: '2211.39'
    }
  })
, provideConfig({
    cmsComponents: {
      
    }
  })]
})
export class SpartacusConfigurationModule { }
