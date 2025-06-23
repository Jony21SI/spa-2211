import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigModule } from '@spartacus/core';
import { LayoutConfig } from '@spartacus/storefront';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      layoutSlots:{
        LandingPage2Template:{
/*           lg:{
            slots:['Section1','Section2','Section3']
          }, */
          slots:['Section1','StaticComponentSlot','Section2','Section3','Section4','Section5']
        }
      }
    }as LayoutConfig)
  ]
})
export class Custom1LayoutModule { }
