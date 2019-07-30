import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BankDashboardComponent } from './bank-dashboard/bank-dashboard.component';
import { BankDetailsService } from '../bank-details.service';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { SearchFilterPipe } from '../search-filter.pipe';
import { AppModule } from '../app.module';

@NgModule({
  imports: [
    CommonModule,
    NgxPaginationModule,
   // AppModule,
    FormsModule,
    
  ],
  declarations: [BankDashboardComponent],
  providers: [BankDetailsService],
 
})
export class BankListModule { }
