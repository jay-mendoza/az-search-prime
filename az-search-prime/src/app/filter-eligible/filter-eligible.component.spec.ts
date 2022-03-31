import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterEligibleComponent } from './filter-eligible.component';

describe('FilterEligibleComponent', () => {
  let component: FilterEligibleComponent;
  let fixture: ComponentFixture<FilterEligibleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterEligibleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterEligibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
