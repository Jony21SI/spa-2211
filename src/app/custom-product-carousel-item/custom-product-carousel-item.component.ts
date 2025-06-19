import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProductCarouselItemComponent, ProductListItemContext, ProductListItemContextSource } from '@spartacus/storefront';

@Component({
  selector: 'app-custom-product-carousel-item',
  standalone: false,
  templateUrl: './custom-product-carousel-item.component.html',
  styleUrl: './custom-product-carousel-item.component.scss',
  providers:[
    ProductListItemContextSource,
    {
      provide: ProductListItemContext,
      useExisting: ProductListItemContextSource
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomProductCarouselItemComponent extends ProductCarouselItemComponent{
/* PRIMARY:  */
}
