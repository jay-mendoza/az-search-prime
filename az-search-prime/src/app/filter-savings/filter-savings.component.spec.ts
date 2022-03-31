import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterSavingsComponent } from './filter-savings.component';

describe('FilterSavingsComponent', () => {
  let component: FilterSavingsComponent;
  let fixture: ComponentFixture<FilterSavingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterSavingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterSavingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
