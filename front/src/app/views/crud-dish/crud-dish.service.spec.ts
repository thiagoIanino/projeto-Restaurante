import { TestBed } from '@angular/core/testing';

import { CrudDishService } from './crud-dish.service';

describe('CrudDishService', () => {
  let service: CrudDishService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudDishService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
