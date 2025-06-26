import { Component, OnInit } from '@angular/core';
import { OrderEntry } from '@spartacus/cart/base/root';
import { Observable } from 'rxjs';
import { ActiveCartService } from '@spartacus/cart/base/core';

@Component({
  selector: 'app-static-page',
  standalone: false,
  templateUrl: './static-page.component.html',
  styleUrl: './static-page.component.scss'
})
export class StaticPageComponent implements OnInit{
  orderEntries$!: Observable<OrderEntry[]>;

  constructor(
    private cartService: ActiveCartService
  ){}
  
  ngOnInit():void{
  this.orderEntries$ = this.cartService.getEntries();
  }

}
