import { Component, OnInit } from '@angular/core';
import { Equipement } from '../entities/Equipement';
import { CatalogServicesService } from '../Services/catalog-services.service';
import { PanierObject } from '../entities/PanierObject';
import { Command } from 'selenium-webdriver';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
Equipements:Equipement[];
selectedEquipements:Equipement[]=[];


  constructor(private service:CatalogServicesService) { }

  ngOnInit() {
    this.getEquipementsList();
  }
  getEquipementsList()
  {
    this.service.getEquipementsList().subscribe((data: Equipement[]) => this.Equipements = data)
  }

  onAddClick(eq:Equipement)
  {
   
    if(this.selectedEquipements.find(x => x == eq) != null )
    {
      console.log("existe deja")
    }
    else{
    this.selectedEquipements.push(eq);
    }
    
   
  }

}
