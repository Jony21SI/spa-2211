import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomProductCarouselItemComponent } from './custom-product-carousel-item.component';

describe('CustomProductCarouselItemComponent', () => {
  let component: CustomProductCarouselItemComponent;
  let fixture: ComponentFixture<CustomProductCarouselItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomProductCarouselItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomProductCarouselItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
