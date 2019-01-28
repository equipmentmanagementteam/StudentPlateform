import { Component, OnInit } from '@angular/core';
import { StudentServicesService } from '../Services/student-services.service';
import {  Utilisateur } from '../entities/Utilisateur';
import { map } from 'rxjs/operators';



@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})

export class StudentComponent implements OnInit {
  router: any;
  x:number;

  name:string;
  users :Utilisateur[];
  constructor(private service:StudentServicesService) { }
  
  ngOnInit() {
    
    this.service.greeting();
    this.name="mohamed";
  console.log(this.service.getProductLList().subscribe((data: Utilisateur[]) => this.users = data));

  }
 public add(a:number)
 {
  console.log(this.service.getProductLList());
 }
getList()
{
  console.log(this.service.getProductLList());
}
}
