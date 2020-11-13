import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ItemForSaleComponent} from './item-for-sale.component';

describe('ItemForSaleComponent', () => {
  let component: ItemForSaleComponent;
  let fixture: ComponentFixture<ItemForSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemForSaleComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemForSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
