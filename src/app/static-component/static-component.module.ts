import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaticComponentComponent } from './static-component.component';
import { CmsConfig, ConfigModule } from '@spartacus/core';
import { provideCmsStructure } from '@spartacus/storefront';



@NgModule({
  declarations: [
    StaticComponentComponent
  ],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      cmsComponents:{
        StaticComponent: {
        component: StaticComponentComponent
      },
      },
    } as CmsConfig)
  ],
  providers: [
    provideCmsStructure({
      componentId:'StaticComponent',
      pageSlotPosition: 'StaticComponentSlot'
    })
  ],
})
export class StaticComponentModule { }
