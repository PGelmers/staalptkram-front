import {TestBed} from '@angular/core/testing';

import {ItemForSaleService} from './item-for-sale.service';

describe('ItemForSaleService', () => {
  let service: ItemForSaleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemForSaleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
