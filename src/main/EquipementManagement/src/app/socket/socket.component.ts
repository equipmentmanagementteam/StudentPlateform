import { Component, OnInit } from '@angular/core';
import { SocketDataService } from '../Services/socket-data.service';
import { ToastService } from '../Services/toaster/toaster.service';

@Component({
  selector: 'app-socket',
  templateUrl: './socket.component.html',
  styleUrls: ['./socket.component.css']
})
export class SocketComponent implements OnInit {

  constructor(private service:SocketDataService,private toastService: ToastService) { }
  message:String="hi";
  message1:String="hi";
  messages: string[] = [];
  messages1: string[] = [];
  n:number;
  ngOnInit() {
    this.service
      .getMessages(this.n)
      .subscribe((message: string) => {
        this.messages.push(message);
        this.Notif("client 1 recieve a message");
      });

      this.service
      .getMessages1()
      .subscribe((message: string) => {
        this.messages1.push(message);
        this.Notif("client 2 recieve a message");
        
      });
  }
  sendMessage() {
    this.service.sendMessage(this.message);
    
    this.message = '';
  }

  sendMessage1() {
    this.service.sendMessage1(this.message1);
    
    this.message1 = '';
  }
  Notif(msg:string) {
    this.toastService.success(msg);
   }

}
