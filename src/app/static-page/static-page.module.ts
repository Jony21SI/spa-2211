import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaticPageComponent } from './static-page.component';
import { ActiveCartService } from '@spartacus/cart/base/core';



@NgModule({
  declarations: [
    StaticPageComponent
  ],
  imports: [
    CommonModule
  ],
  providers:[
    ActiveCartService
  ]
})
export class StaticPageModule { }
