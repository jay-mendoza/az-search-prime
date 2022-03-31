import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-condition',
  templateUrl: './filter-condition.component.html',
  styleUrls: ['./filter-condition.component.less']
})

export class FilterConditionComponent implements OnInit {
  condition: string;
  conditonNewChecked: boolean;
  conditonUsedChecked: boolean;

  conditionDefault: string = 'Any';
  newCondition: string = 'New';
  usedCondition: string = 'Used';

  @Output() filterChanged = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    this.condition = this.conditionDefault;
    this.conditonNewChecked = true;
    this.conditonUsedChecked = true;
  }

  newToggled(): void {
    this.conditonNewChecked = !this.conditonNewChecked;

    if (this.bothAreUnchecked()) { this.conditonUsedChecked = true; }

    this.onToggleChanged();
  }

  usedToggled(): void {
    this.conditonUsedChecked = !this.conditonUsedChecked;

    if (this.bothAreUnchecked()) { this.conditonNewChecked = true; }

    this.onToggleChanged();
  }

  onToggleChanged(): void {
    if (this.conditonNewChecked && this.conditonUsedChecked) {
      this.condition = this.conditionDefault;
      this.filterChanged.emit(null);
      return;
    }

    if (this.conditonNewChecked) {
      this.condition = this.newCondition;
      this.filterChanged.emit('p_n_condition-type:6461716011');
    }

    if (this.conditonUsedChecked) {
      this.condition = this.usedCondition;
      this.filterChanged.emit('p_n_condition-type:6461718011');
    }
  }

  bothAreUnchecked(): boolean {
    return !this.conditonNewChecked && !this.conditonUsedChecked;
  }
}
