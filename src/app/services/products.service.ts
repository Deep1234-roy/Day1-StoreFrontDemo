import { Injectable } from '@angular/core';
import {  HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  getProductDetails() {
    throw new Error('Method not implemented.');
  }

  constructor(private http : HttpClient) { }

httpOptions={
  headers: new HttpHeaders({
    'orgCodes' : 'ochs'
  })
}

  getAllProductsApps(){
    return this.http.get("https://dev.encompass.gehealthcare.com/encompass-storefront-api/public/json/user-products",this.httpOptions);
  }
}
