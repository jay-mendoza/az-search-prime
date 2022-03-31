import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterAvailabilityComponent } from './filter-availability.component';

describe('FilterAvailabilityComponent', () => {
  let component: FilterAvailabilityComponent;
  let fixture: ComponentFixture<FilterAvailabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterAvailabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
