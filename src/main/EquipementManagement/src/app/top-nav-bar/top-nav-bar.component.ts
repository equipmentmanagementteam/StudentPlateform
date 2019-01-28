import { Component, OnInit, Input } from '@angular/core';
import { noComponentFactoryError } from '@angular/core/src/linker/component_factory_resolver';
import { NotifierService } from 'angular-notifier';
import { NotificationService } from '../Services/notification.service';

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.css']
})
export class TopNavBarComponent implements OnInit {
  
  num:number;
  notifications: Notification[]=[];
  unSeenNotifications: Notification[]=[];
  no:Notification[]=[];

  constructor(private  notifService:NotificationService) { 
   
   
  }

  ngOnInit() {
    
    this.notifService.getAllNotifications().subscribe((data: Notification[]) => this.notifications = data);
    this.notifService.getUnseen().subscribe((data: Notification[]) => this.unSeenNotifications = data);
    this.num=this.notifications.length;
   
  }

  notifSeen()
  {
    
    this.notifService.allSeen().subscribe((data: Notification[]) => this.notifications = data);
    this.notifService.getAllNotifications().subscribe((data: Notification[]) => this.notifications = data);
   // this.notifService.getUnseen().subscribe((data: Notification[]) => this.unSeenNotifications = data);
    this.unSeenNotifications.length=0;
  }

}
