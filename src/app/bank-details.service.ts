import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
   providedIn: 'root'
})
export class BankDetailsService {



   private url = 'http://vast-shore-74260.herokuapp.com/banks?city=MUMBAI'



   constructor(public http: HttpClient, public router: Router) {

   }


   public getAllBanks(): Observable<any> {
      return this.http.get(`https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI`);
   }
}
