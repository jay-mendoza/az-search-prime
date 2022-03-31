import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material';

@Component({
  selector: 'app-filter-eligible',
  templateUrl: './filter-eligible.component.html',
  styleUrls: ['./filter-eligible.component.less']
})

export class FilterEligibleComponent implements OnInit {
  @Output() filterChanged = new EventEmitter<string>();

  eligible: string;  

  defaultEligible: string = 'Any';
  fresh: string = 'Prime Fresh';
  wardrobe: string = 'Prime Wardrobe';
  international: string = 'International Shipping';

  constructor() { }  

  ngOnInit(): void {
    this.eligible = this.defaultEligible;
  }

  selectionChange(event: MatButtonToggleChange): void {
    switch (event.value) {
      case this.fresh:
        this.filterChanged.emit('p_n_fresh_match:11292696011');
        this.eligible = this.fresh;
        break;
      case this.wardrobe:
        this.filterChanged.emit('p_n_is_primewardrobe:15121302011');
        this.eligible = this.wardrobe;
        break;
      case this.international:
        this.filterChanged.emit('n:230659011');
        this.eligible = this.international;
        break;
      case this.defaultEligible:
      default:
        this.filterChanged.emit(null);
        this.eligible = this.defaultEligible;
        break;
    }
  }
}
