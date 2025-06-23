import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProductService } from '@spartacus/core';
import { CmsComponentData, ProductCarouselComponent } from '@spartacus/storefront';

@Component({
  selector: 'app-custom-product-carousel',
  standalone: false,
  templateUrl: './custom-product-carousel.component.html',
  styleUrl: './custom-product-carousel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CustomProductCarouselComponent extends ProductCarouselComponent{
  constructor(
    protected component:CmsComponentData<any>,
    protected override productService:ProductService
  )
  {
    super(component,productService);
    this.title$.subscribe(text=>{console.log(text)})
    this.items$.subscribe(data=>{console.log(data)})
  }
}
