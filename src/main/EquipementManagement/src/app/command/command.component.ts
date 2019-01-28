import { Component, OnInit } from '@angular/core';
import { CommandService } from '../Services/command.service';
import { Command } from '../entities/Command';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.css']
})
export class CommandComponent implements OnInit {
  myCommands:Command[]=[];
  constructor(private service:CommandService) { }

  ngOnInit() {
    this.getCommands()
  }

getCommands()
{
 console.log(this.service.getAllCommands().subscribe((data: Command[]) => this.myCommands = data))
}

}
