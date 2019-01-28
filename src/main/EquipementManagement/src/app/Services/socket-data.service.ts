import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as io from "socket.io-client";
@Injectable()
export class SocketDataService {
 private url = 'http://localhost:2000';
    private socket;    
    
    constructor() {
        this.socket = io(this.url);
    }
    public sendMessage(message) {
      
        this.socket.emit('client1', message);
    }
    public sendMessage1(message) {
      
        this.socket.emit('client2', message);
    }

    public getMessages = (n:number) => {
        return Observable.create((observer) => {
            this.socket.on('client1', (message) => {
                observer.next(message);
                n=n+1;
            });
        });
    }
    
    
    public getMessages1 = () => {
        return Observable.create((observer) => {
            this.socket.on('client2', (message) => {
                observer.next(message);
            });
        });
    }

}
