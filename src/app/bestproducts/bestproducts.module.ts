import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BestproductsComponent } from './bestproducts.component';
import { RouterModule } from '@angular/router';
import { CmsPageGuard } from '@spartacus/storefront';



@NgModule({
  declarations: [
    BestproductsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'bestproducts',
        component:BestproductsComponent,
        canActivate: [
          CmsPageGuard
        ],
        data:{
          pageLabel:'homepage'
        }
      }
    ])
  ]
})
export class BestproductsModule { }
