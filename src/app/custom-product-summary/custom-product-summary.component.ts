import { Component } from '@angular/core';
import { ProductSummaryComponent } from '@spartacus/storefront';

@Component({
  selector: 'app-custom-product-summary',
  standalone: false,
  templateUrl: './custom-product-summary.component.html',
  styleUrl: './custom-product-summary.component.scss'
})
export class CustomProductSummaryComponent extends ProductSummaryComponent{
  
}
