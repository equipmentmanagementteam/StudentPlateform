import { Component , NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { NotifierService } from 'angular-notifier';
import { ToastService } from './Services/toaster/toaster.service';
import { Subscription } from 'rxjs';
import { NotificationService } from './Services/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Equipement Management';
  private toastservice:ToastService;
  notif:number;
  notifications: Notification[]=[];
  unSeenNotifications: Notification[]=[];
  private readonly notifier: NotifierService;
  
  constructor( notifierService: NotifierService ,  ts:ToastService, private notifService:NotificationService) {
    this.toastservice=ts;
    this.notifier = notifierService;
    this.notifier.show( {
      type: 'success',
      message: 'You are awesome! I mean it!',
      id: 'THAT_NOTIFICATION_ID' , // Again, this is optional
    
    } );
    
    this.notif=this.toastservice.getNotifNumber();
    this.subscription = ts.num$.subscribe(
      mission => {
        this.notif = mission;
        this.announced = true;
        this.confirmed = false;
    });
    
  }
  ngOnInit() {
   
  }
  

  
  mission = '<no mission announced>';
  confirmed = false;
  announced = false;
  subscription: Subscription;
 
 
 
  confirm() {
    this.confirmed = true;
    //this.missionService.confirmMission(this.astronaut);
  }



}
