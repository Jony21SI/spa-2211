import { Component } from '@angular/core';
import { MiniCartComponent } from '@spartacus/cart/base/components/mini-cart';
import { OrderEntry } from '@spartacus/cart/base/root';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mini-cart-component',
  standalone: false,
  templateUrl: './mini-cart-component.component.html',
  styleUrl: './mini-cart-component.component.scss'
})
export class MiniCartComponentComponent extends MiniCartComponent{

}
