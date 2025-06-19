import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomProductCarouselComponent } from './custom-product-carousel.component';
import { CmsConfig, ConfigModule, I18nModule, UrlModule } from '@spartacus/core';
import { CarouselModule, MediaModule, PageComponentModule } from '@spartacus/storefront';
import { RouterModule } from '@angular/router';
import { CustomProductCarouselItemComponent } from '../custom-product-carousel-item/custom-product-carousel-item.component';



@NgModule({
  declarations: [
    CustomProductCarouselComponent, CustomProductCarouselItemComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    MediaModule,
    RouterModule,
    UrlModule,
    I18nModule,
    PageComponentModule,
    ConfigModule.withConfig({
          cmsComponents:{
            ProductCarouselComponent: {
              component: CustomProductCarouselComponent
            }
          }
        })
  ]
})
export class CustomProductCarouselModule { }
