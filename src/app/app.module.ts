import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import{BankListModule} from "./bank-list/bank-list.module";
import{BankDashboardComponent}from"./bank-list/bank-dashboard/bank-dashboard.component";
import{BankDetailsService}from"./bank-details.service"

import { AppComponent } from './app.component';
import { SearchFilterPipe } from './search-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    BankListModule,
    FormsModule,
    RouterModule.forRoot([
      { path:'BankList', component: BankDashboardComponent, pathMatch: 'full'},
      { path: '', redirectTo:'BankList', pathMatch: 'full'},
      { path: '*', component: BankDashboardComponent},
      { path: '**', component: BankDashboardComponent},
    ])
  ],
  providers: [BankDetailsService],
  bootstrap: [AppComponent],
  exports:[SearchFilterPipe]
})
export class AppModule { }
