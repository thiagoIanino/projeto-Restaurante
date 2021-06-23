import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudDishComponent } from './crud-dish.component';

describe('CrudDishComponent', () => {
  let component: CrudDishComponent;
  let fixture: ComponentFixture<CrudDishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudDishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudDishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
