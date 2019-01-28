import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { IToast } from 'src/app/entities/IToast';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

 private subject = new Subject<IToast>();
  private keepAfterRouteChange = false;
  constructor(private router: Router) {
   router.events.subscribe(event => {
    if (event instanceof NavigationStart) {
     if (this.keepAfterRouteChange) {
      this.keepAfterRouteChange = false;
     } else {
      this.clear();
     }
    }
   });
  }
 getToast(): Observable<any> {
  return this.subject.asObservable();
 }
 success(message:string, keepAfterRouteChange = true): void {
  this.toast(message+" notifivation number "+this.notifnumber, keepAfterRouteChange);
 }
 error(message:string, keepAfterRouteChange = true): void {
  this.toast(message, keepAfterRouteChange);
 }
 info(message: string, keepAfterRouteChange = true): void {
  this.toast(message, keepAfterRouteChange);
 }
 warn(message: string, keepAfterRouteChange = true): void {
  this.toast(message, keepAfterRouteChange);
 }
 toast(message: string, keepAfterRouteChange = true): void {
  this.keepAfterRouteChange = keepAfterRouteChange;
  this.subject.next(<IToast>{ message: message });
 }
 clear() {
  this.subject.next();
 }
 private notifnumber :number=0;
 private missionConfirmedSource = new Subject<string>();

 // Observable string streams
 

 // Service message commands
 incrNotif() {
   this.notifnumber=this.notifnumber+1;
   console.log(this.notifnumber);
 }
 getNotifNumber()
 {
   return this.notifnumber;
 }


 private missionAnnouncedSource = new Subject<number>();

 // Observable string streams
 num$ = this.missionAnnouncedSource.asObservable();
 missionConfirmed$ = this.missionConfirmedSource.asObservable();

 // Service message commands
 announceMission(mission: number) {
   this.missionAnnouncedSource.next(mission);
 }

 confirmMission(astronaut: string) {
   this.missionConfirmedSource.next(astronaut);
 }
 
}
