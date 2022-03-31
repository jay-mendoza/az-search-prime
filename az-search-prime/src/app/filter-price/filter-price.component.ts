import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-price',
  templateUrl: './filter-price.component.html',
  styleUrls: ['./filter-price.component.less']
})
export class FilterPriceComponent implements OnInit {
  @Output() filterChanged = new EventEmitter<string>();
  price: string;
  minPrice: number;
  maxPrice: number;

  defaultPrice: string = 'Any';
  minValue: number = 0.01;
  maxValue: number = 999999.99;

  constructor() { }

  ngOnInit(): void {
    this.price = this.defaultPrice;
    this.minPrice = this.minValue;
    this.maxPrice = this.maxValue;
  }

  onMinChange(price: number): void {
    this.minPrice =
      this.priceIsNullOrZero(price) || price < this.minValue || price >= this.maxPrice || price >= this.maxValue
        ? this.minValue
        : this.roundToTwo(price);

    this.updatePrices();
  }

  onMaxChange(price: number): void {
    this.maxPrice =
      this.priceIsNullOrZero(price) || price > this.maxValue || price <= this.minPrice || price <= this.minValue
        ? this.maxValue
        : this.roundToTwo(price);

    this.updatePrices();
  }

  updatePrices(): void {
    if (this.minPrice == this.minValue && this.maxPrice == this.maxValue) {
      this.price = this.defaultPrice;
      this.filterChanged.emit(null);
    } else {
      this.price = `${this.minPrice == this.minValue ? '<' : `$${this.minPrice}`}` +
        `${this.minPrice == this.minValue || this.maxPrice == this.maxValue ? ' ' : ' – '}` +
        `${this.maxPrice == this.maxValue ? '+' : `$${this.maxPrice}`}`;

      this.filterChanged.emit(`p_36:${this.minPrice * 100}-${this.maxPrice * 100}`);
    }
  }

  priceIsNullOrZero(price: number): boolean {
    return price == undefined || price == null || price <= 0;
  }

  roundToTwo(value: number) {
    var multiplicator = Math.pow(10, 2);
    value = parseFloat((value * multiplicator).toFixed(11));
    var test = (Math.round(value) / multiplicator);
    return +(test.toFixed(2));
  }
}
