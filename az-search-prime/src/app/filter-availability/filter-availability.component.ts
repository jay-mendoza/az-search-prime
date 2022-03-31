import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatCheckboxChange } from '@angular/material';

@Component({
  selector: 'app-filter-availability',
  templateUrl: './filter-availability.component.html',
  styleUrls: ['./filter-availability.component.less']
})

export class FilterAvailabilityComponent implements OnInit {
  @Output() filterChanged = new EventEmitter<string>();
  
  availability: string;
  isChecked: boolean;

  defaultAvailability: string = 'In Stock';
  outOfStock: string = 'Include Out of Stock';

  constructor() { }

  ngOnInit(): void {
    this.availability = this.defaultAvailability;
    this.isChecked = false;
  }

  checkChanged(status: MatCheckboxChange): void {
    this.isChecked = status.checked;
    if (this.isChecked) {
      this.availability = this.outOfStock;
      this.filterChanged.emit('p_n_availability:8219610011');
    } else {
      this.availability = this.defaultAvailability;
      this.filterChanged.emit(null);
    }
  }
}
