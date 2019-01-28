import { Component, OnInit , Input} from '@angular/core';
import { Equipement } from '../entities/Equipement';
import { PanierObject } from '../entities/PanierObject';
import { CommandService } from '../Services/command.service';
import { Command } from 'selenium-webdriver';
import { Utilisateur } from '../entities/Utilisateur';
import { StudentServicesService } from '../Services/student-services.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})

export class PanierComponent implements OnInit {
  @Input() selectedEquipements: Equipement[];
  
  @Input('master') masterName: string;
  commands:Command[]=[];
  command:Command;
  student:Utilisateur;
  ref:string="";

  d: Date = new Date(); 

  date:String=this.d.getFullYear()+"-"+(this.d.getMonth()+1) + "-" +this.d.getDay();
  constructor(private service:CommandService, private studentservice:StudentServicesService) { }

  ngOnInit() {
   this.ref="123456";
   this.studentservice.getUserById(2).subscribe((data: Utilisateur) => this.student = data);
  
  }
removeFromList(eq:Equipement)
{
  const index = this.selectedEquipements.indexOf(eq, 0);
  if (index > -1) {
     this.selectedEquipements.splice(index, 1);
  }
}
onSubmit(eq:Equipement)
{
  console.log(eq.quan);
}
onCommand()
{
  
 this.service.addCommand(this.selectedEquipements,"",this.ref,this.student);
}
}
