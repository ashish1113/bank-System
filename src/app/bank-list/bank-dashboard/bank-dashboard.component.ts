import { Component, OnInit ,OnChanges} from '@angular/core';
import { BankDetailsService } from './../../bank-details.service';

@Component({
  selector: 'app-bank-dashboard',
  templateUrl: './bank-dashboard.component.html',
  styleUrls: ['./bank-dashboard.component.css']
})
export class BankDashboardComponent implements OnInit { 

  private _searchState
  public bankList = [];
  

  p: Number = 1;
  count: Number = 5;

  public _searchTerm1: string;
  filteredbanks: any;
  filteredbanksByStateList: any;

  // We are binding to this property in the view template, so this
  // getter is called when the binding needs to read the value

 
  get searchTerm1(): string {
    console.log("search term get called")
    return this._searchTerm1;
  }


  set searchTerm1(value: string) {
    console.log("searchterm set called",value)
    this._searchTerm1 = value;
    this.filteredbanks = this.filterEmployees(value);
    console.log("filter bank are",this.filteredbanks)
  
  }
  

  get searchState(): string {
    console.log("search state get called")
    return this._searchState;
  }

  set searchState(value: string) {
      console.log("searchStateset called",value)
     
      this._searchState = value
      this.filteredbanksByStateList = this.filterByState(value);
      this.filteredbanks=this.filteredbanksByStateList;
      console.log("filter bank are 2",this.filteredbanksByStateList)
    }

  // This setter is called everytime the value in the search text box changes
  

 
  constructor(public bankDetailsService:BankDetailsService) { }
  ngOnChanges() {
    console.log("on change called")
  }
  ngOnInit() {

    // console.log(this.searchState)
   this.getBankData()
  }

  filterEmployees(searchString: string) {
    return this.filteredbanksByStateList.filter(bank =>
     (bank.bank_name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1)||
     (bank.branch.toLowerCase().indexOf(searchString.toLowerCase()) !== -1) ||
     (bank.district.toLowerCase().indexOf(searchString.toLowerCase()) !== -1));
  }
 

  
  
  public getBankData =() =>{
    this.bankList = this.bankDetailsService.getBankDetailList()
    this.filteredbanks= this.bankList,
    this.filteredbanksByStateList = this.bankList
    console.log("the second data is",this.filteredbanks)
  }
  public filterByState =(stateValue:String) =>{
    this._searchTerm1 ="";
    console.log("here is the state ",stateValue)
    return this.bankList.filter(bank =>
     
      (bank.city.toLowerCase().indexOf(stateValue.toLowerCase()) !== -1));

  }
}
