import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiniCartComponentComponent } from './mini-cart-component/mini-cart-component.component';
import { CmsConfig, ConfigModule, I18nModule, UrlModule } from '@spartacus/core';
import { IconModule } from '@spartacus/storefront';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MiniCartComponentComponent
  ],
  imports: [
    CommonModule,
    IconModule,
    RouterModule,
    UrlModule,
    I18nModule,
    ConfigModule.withConfig({
      cmsComponents:{
        MiniCartComponent: {
          component: MiniCartComponentComponent
        }
      }
    }as CmsConfig )
  ]
})
export class MiniCartCustomModule { }
