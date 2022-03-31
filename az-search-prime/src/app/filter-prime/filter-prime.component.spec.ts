import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterPrimeComponent } from './filter-prime.component';

describe('FilterPrimeComponent', () => {
  let component: FilterPrimeComponent;
  let fixture: ComponentFixture<FilterPrimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterPrimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterPrimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
