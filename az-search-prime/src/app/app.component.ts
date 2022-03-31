import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'search-prime';
  url:string = '';

  amazonUrl: string = 'https://www.amazon.com';
  conditionQuery: string;

  filtersEnabled: boolean = false;

  keyword: string;
  brand: string;
  prime: string;
  condition: string;
  rating: string;
  price: string;
  availability: string;
  eligible: string;

  savings: string;

  savingsQueryField: string = 'srs';
  isEntityQuery: boolean = false;

  searchQueries: string[];

  constructor() {
    this.url = this.amazonUrl;
  }

  conditionChanged(condition: string): void {
    this.condition = condition;
    this.updateUrl();
  }

  brandChanged(brand: string): void {
    this.brand = brand;
    this.updateUrl();
  }

  primeChanged(prime: string): void {
    this.prime = prime;
    this.updateUrl();
  }

  priceChanged(price: string): void {
    this.price = price;
    this.updateUrl();
  }

  ratingChanged(rating: string): void {
    this.rating = rating;
    this.updateUrl();
  }

  eligibleChanged(eligible: string): void {
    this.eligible = eligible;
    this.updateUrl();
  }

  availabilityChanged(availability: string): void {
    this.availability = availability;
    this.updateUrl();
  }

  savingsChanged(savings: string): void {
    this.savings = savings;
    this.updateUrl();
  }

  onKeywordChange(keyword: string) {
    this.filtersEnabled = keyword.length > 0;
    this.keyword = keyword;
    this.updateUrl();
  }

  updateUrl() {
    this.url = `${this.amazonUrl}/s?rh=${encodeURIComponent(this.composeQueryString())}${this.composeSavingsQuery()}`;
  }

  doSearch() {
    window.open(this.url, '_blank');
  }

  composeSavingsQuery() {
    return this.isNullOrEmpty(this.savings) ? '' : `&srs=${this.savings}`;
  }

  composeQueryString() {   
    return [`k:${this.keyword}`,
      this.condition,
      this.prime,
      this.brand,
      this.rating,
      this.price,
      this.availability,
      this.eligible
    ].filter(filter => !this.isNullOrEmpty(filter)).join(',');

  }



  isNullOrEmpty(value: string): boolean {
    return value == undefined || value == null || value.length <= 0;
  }


}
