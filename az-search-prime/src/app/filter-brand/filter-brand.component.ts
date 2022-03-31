import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatAutocompleteSelectedEvent, MatChipInputEvent, MatAutocomplete } from '@angular/material';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-filter-brand',
  templateUrl: './filter-brand.component.html',
  styleUrls: ['./filter-brand.component.less']
})

export class FilterBrandComponent implements OnInit {
  @ViewChild('brandInput') brandInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  @Output() filterChanged = new EventEmitter<string>();

  brandControl = new FormControl();
  brands: string[] = [];
  filteredAmazonBrands: Observable<string[]>;
  filteredCommonBrands: Observable<string[]>;

  separatorKeysCodes: number[] = [ENTER, COMMA];
  brandStatus: string = 'Any';

  amazonBrands: string[] = [
    '206 Collective', 'Basic Care', 'AmazonBasics', 'Amazon Essentials', 'Amazon Elements',
    'Core 10', 'Goodthreads', 'Happy Belly', 'Mae', 'Mama Bear', 'OWN PWR', 'Presto!',
    'Pinzon by Amazon', 'Revly', 'Rivet', 'Solimo', 'Spotted Zebra', 'Stone & Beam', 'Wickedly Prime'];
  commonBrands: string[] = [
    'Asus', 'Breville', 'Canon', 'Case Logic', 'CHOETECH', 'Creative', 'Harney & Sons',
    'Logitech', 'Roccat', 'Samsung', 'Sandisk', 'Soylent', 'Western Digital'];
  
  constructor() { }

  ngOnInit(): void {
    this.filteredAmazonBrands = this.brandControl.valueChanges.pipe(
      startWith(null),
      map((brand: string | null) => brand ? this._filterAmazon(brand) : this.amazonBrands.slice()));

    this.filteredCommonBrands = this.brandControl.valueChanges.pipe(
      startWith(null),
      map((brand: string | null) => brand ? this._filterCommon(brand) : this.commonBrands.slice()));
  }

  private _filterAmazon(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.amazonBrands.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  private _filterCommon(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.commonBrands.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  add(event: MatChipInputEvent): void {
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      if ((value || '').trim()) { this.brands.push(value.trim()); }      

      if (input) { input.value = ''; }

      this.brandControl.setValue(null);
    }
  }

  remove(brand: string): void {
    const index = this.brands.indexOf(brand);

    if (index >= 0) { this.brands.splice(index, 1); }

    this.updateStatus();    
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.brands.push(event.option.viewValue);
    this.brandInput.nativeElement.value = '';
    this.brandControl.setValue(null);
    this.updateStatus();
  }

  composeBrandQuery(): string {
    return this.brands.join('|');
  }

  updateStatus(): void {
    this.brandStatus = this.brands.length > 0 ? this.brands.length == 1 ? this.brands[0] : `${this.brands.length} Selected` : this.brandStatus;
    this.filterChanged.emit(`p_89:${this.composeBrandQuery()}`);
  }



}
