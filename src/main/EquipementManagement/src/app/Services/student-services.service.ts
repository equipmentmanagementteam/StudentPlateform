import { Injectable } from '@angular/core';
import { Utilisateur} from '../entities/Utilisateur';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})

export class StudentServicesService {


  constructor(private http: HttpClient) { }


  adduser(user:Utilisateur)
  {
  /*
    const  headers = new Headers();
    headers.append('Content-Type','application/X-www-form=urlencoded');
    headers.append('Content-Type', 'application/json');
    let dataAsString = JSON.stringify(user);
    console.log(dataAsString);
    return this.http.post("http://localhost:8001/question",dataAsString)
    .map((response:Response)=>response.json())import { map } from 'rxjs/operators';
    .subscribe((data)=>{console.log("got smthg back",data);}
      ,(error)=>{console.log("Error!!!", error);}
       );*/
  }
users: Utilisateur[];
  getProductLList(){
    
   
    return this.http.get("http://localhost:8080/product/all");

     
 }
 getUserById(id:number){
    
   
  return this.http.get("http://localhost:8080/user/userbyid?id="+id);

   
}

  greeting()
  {
    console.log("hello mohamed");
  }

}
