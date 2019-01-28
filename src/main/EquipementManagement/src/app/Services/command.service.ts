import { Injectable } from '@angular/core';
import { Equipement } from '../entities/Equipement';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Command } from 'selenium-webdriver';
import { Utilisateur } from '../entities/Utilisateur';

@Injectable({
  providedIn: 'root'
})
export class CommandService {

  constructor(private http:HttpClient) { }


  addCommand(equipement:Equipement[],date:String,ref:string,user:Utilisateur)
  {
    
    
    for(let eq of equipement)
    {
      
      var command= {"id":"0","ref":ref,"equipement":eq,"student":user,"quantity":eq.quan,"date":date,"status":"false"};
      
     this.http.post("http://localhost:8080/command/add",command)
    .subscribe((data)=>{console.log("got smthg back",data);}
      ,(error)=>{console.log("Error!!!", error);}
       );
    }
 
    
  }
  getAllCommands()
  {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa('user:mohamed') });
    return this.http.get("http://localhost:8080/command/mycommands");
  }

  deleteCommand(id:number)
  {
    this.http.post("http://localhost:8080/command/delete",id);
  }

}
