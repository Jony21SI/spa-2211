import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { provideHttpClient, withFetch, withInterceptorsFromDi } from "@angular/common/http";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { AppRoutingModule } from "@spartacus/storefront";
import { AppComponent } from './app.component';
import { SpartacusModule } from './spartacus/spartacus.module';
import { Custom1LayoutModule } from './custom1-layout/custom1-layout.module';
import { BestproductsModule } from './bestproducts/bestproducts.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    AppRoutingModule,
    EffectsModule.forRoot([]),
    SpartacusModule,
    Custom1LayoutModule, 
    BestproductsModule
  ],
  providers: [provideHttpClient(withFetch(), withInterceptorsFromDi())],
  bootstrap: [AppComponent]
})
export class AppModule { }
