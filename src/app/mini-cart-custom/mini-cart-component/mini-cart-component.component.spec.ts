import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniCartComponentComponent } from './mini-cart-component.component';

describe('MiniCartComponentComponent', () => {
  let component: MiniCartComponentComponent;
  let fixture: ComponentFixture<MiniCartComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MiniCartComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniCartComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
