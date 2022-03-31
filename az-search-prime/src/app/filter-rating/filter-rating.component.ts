import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSliderChange } from '@angular/material';

@Component({
  selector: 'app-filter-rating',
  templateUrl: './filter-rating.component.html',
  styleUrls: ['./filter-rating.component.less']
})

export class FilterRatingComponent implements OnInit {
  @Output() filterChanged = new EventEmitter<string>();

  rating: string;

  ratingDefault: string = 'Any';
  currentValue: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.rating = this.ratingDefault;
  }

  valueChanged(event: MatSliderChange): void {
    this.rating = event.value <= 0 ? this.ratingDefault : `${event.value} to 5 Stars`;
    this.currentValue = event.value;

    switch (this.currentValue) {
      case 1:
        this.filterChanged.emit('p_72:2661621011');
        break;
      case 2:
        this.filterChanged.emit('p_72:2661620011');
        break;
      case 3:
        this.filterChanged.emit('p_72:2661619011');
        break;
      case 4:
        this.filterChanged.emit('p_72:2661618011');
        break;
      case 0:
      default:
        this.filterChanged.emit(null);
        break;
    }
  }

  formatLabel(value: number | null): string {
    return `${value}+`;
  }
}
