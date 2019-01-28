import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private http: HttpClient) { }


getAllNotifications()
          {
            return this.http.get("http://localhost:8080/notification/all");

          }


          addNotif(notif:Notification)
          {
            
             this.http.post("http://localhost:8080/notification/add",notif)
            .subscribe((data)=>{console.log("got smthg back",data);}
              ,(error)=>{console.log("Error!!!", error);}
               );
            }
          
    getUnseen()
    {
      return this.http.get("http://localhost:8080/notification/unseen");
    }        
      
    allSeen()
    {
    return this.http.get("http://localhost:8080/notification/allseen");
    }

}
