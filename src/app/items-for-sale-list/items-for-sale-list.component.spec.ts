import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ItemsForSaleListComponent} from './items-for-sale-list.component';

describe('ItemsForSaleListComponent', () => {
  let component: ItemsForSaleListComponent;
  let fixture: ComponentFixture<ItemsForSaleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemsForSaleListComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsForSaleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
