import { Component, OnInit } from '@angular/core';
import { Utilisateur } from 'src/app/entities/Utilisateur';
import { StudentServicesService } from 'src/app/Services/student-services.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  user :Utilisateur;
  fullname:string;
  constructor(private service:StudentServicesService) { }

  ngOnInit() {
    
    this.service.getUserById(2).subscribe((data: Utilisateur) => this.user = data);
    this.fullname=this.user.name +" " + this.user.lastname;
  }

}
