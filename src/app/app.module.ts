import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { DropdownModule, MultiSelectModule, ProgressBarModule, TooltipModule } from 'primeng/primeng';
import { MatCheckboxModule,MatTabsModule, MatSortModule, MatPaginatorModule, MatSlideToggleModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';

@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule, DropdownModule,MultiSelectModule, MatCheckboxModule, MatTabsModule, CdkTableModule, MatSortModule, MatPaginatorModule, ProgressBarModule, TooltipModule, MatSlideToggleModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
