import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatalogServicesService {

  constructor(private http: HttpClient) { }
  getEquipementsList(){
    
   
    return this.http.get("http://localhost:8080/equipements/all");

     
 }

}
