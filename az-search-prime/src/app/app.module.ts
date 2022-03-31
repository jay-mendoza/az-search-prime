import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSliderModule,
  MatSlideToggleModule
} from '@angular/material';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FilterBrandComponent } from './filter-brand/filter-brand.component';
import { FilterEligibleComponent } from './filter-eligible/filter-eligible.component';
import { FilterConditionComponent } from './filter-condition/filter-condition.component';
import { FilterRatingComponent } from './filter-rating/filter-rating.component';
import { FilterPriceComponent } from './filter-price/filter-price.component';
import { FilterAvailabilityComponent } from './filter-availability/filter-availability.component';
import { FilterPrimeComponent } from './filter-prime/filter-prime.component';
import { FilterSavingsComponent } from './filter-savings/filter-savings.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterBrandComponent,
    FilterEligibleComponent,
    FilterConditionComponent,
    FilterRatingComponent,
    FilterPriceComponent,
    FilterAvailabilityComponent,
    FilterPrimeComponent,
    FilterSavingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatCheckboxModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,    
    MatSliderModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
