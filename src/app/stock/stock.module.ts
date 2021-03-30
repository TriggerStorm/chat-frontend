import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockComponent } from './stock.component';
import {StockCreateComponent} from './stock-create/stock-create.component';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

const routes: Routes = [
  { path: '', component: StockComponent },
  { path: 'create', component: StockCreateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes), ReactiveFormsModule, CommonModule],
  exports: [RouterModule],
  declarations: [StockCreateComponent, StockComponent]
})
export class StockModule { }
