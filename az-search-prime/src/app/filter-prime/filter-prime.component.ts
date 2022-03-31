import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material';

@Component({
  selector: 'app-filter-prime',
  templateUrl: './filter-prime.component.html',
  styleUrls: ['./filter-prime.component.less']
})

export class FilterPrimeComponent implements OnInit {
  @Output() filterChanged = new EventEmitter<string>();

  prime: string;

  defaultPrime: string = 'Any';
  primeEligible: string = 'Prime';
  sameDayEligible: string = 'Prime Same-Day';
  oneDayEligible: string = 'Prime One-Day';

  constructor() { }

  ngOnInit(): void {
    this.prime = this.defaultPrime;
  }

  selectionChange(event: MatButtonToggleChange): void {
    switch (event.value) {
      case this.primeEligible:
        this.filterChanged.emit('p_85:1');
        this.prime = this.primeEligible;
        break;
      case this.sameDayEligible:
        this.filterChanged.emit('p_96:10155283011');
        this.prime = this.sameDayEligible;
        break;
      case this.oneDayEligible:
        this.filterChanged.emit('p_97:11292772011');
        this.prime = this.oneDayEligible;
        break;
      case this.defaultPrime:
      default:
        this.filterChanged.emit(null);
        this.prime = this.defaultPrime;
        break;
    }
  }
}
