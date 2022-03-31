import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material';

@Component({
  selector: 'app-filter-savings',
  templateUrl: './filter-savings.component.html',
  styleUrls: ['./filter-savings.component.less']
})
export class FilterSavingsComponent implements OnInit {
  @Output() filterChanged = new EventEmitter<string>();

  savings: string;

  defaultSavings: string = 'Any';
  pantry: string = 'Prime Pantry';
  renewed: string = 'Amazon Renewed';

  constructor() { }

  ngOnInit(): void {
    this.savings = this.defaultSavings;
  }

  selectionChange(event: MatButtonToggleChange): void {
    switch (event.value) {
      case this.pantry:
        this.filterChanged.emit('7301146011');
        this.savings = this.pantry;
        break;
      case this.renewed:
        this.filterChanged.emit('12653393011');
        this.savings = this.renewed;
        break;
      case this.defaultSavings:
      default:
        this.filterChanged.emit(null);
        this.savings = this.defaultSavings;
        break;
    }
  }
}
