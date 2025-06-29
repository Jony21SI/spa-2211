import { NgModule } from '@angular/core';
import { CmsConfig, provideConfig } from "@spartacus/core";
import { SMART_EDIT_FEATURE, SmartEditConfig, SmartEditRootModule } from "@spartacus/smartedit/root";

@NgModule({
  declarations: [],
  imports: [
    SmartEditRootModule
  ],
  providers: [provideConfig(<CmsConfig>{
    featureModules: {
      [SMART_EDIT_FEATURE]: {
        module: () =>
          import('@spartacus/smartedit').then((m) => m.SmartEditModule),
      },
    }
  }),
  provideConfig(<SmartEditConfig>{
    smartEdit: {
      storefrontPreviewRoute: 'cx-preview'/* 'STOREFRONT_PREVIEW_ROUTE_PLACEHOLDER' */,
      allowOrigin: 'localhost:9002,40gw5t5m-9002.usw3.devtunnels.ms:443'/* 'ALLOWED_ORIGIN_PLACEHOLDER' */,
    },
  })
  ]
})
export class SmartEditFeatureModule { }
