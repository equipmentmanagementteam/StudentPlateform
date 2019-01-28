import { Component, OnInit } from '@angular/core';
import { ToastService } from '../Services/toaster/toaster.service';

@Component({
  selector: 'app-toast-alerts',
  templateUrl: './toast-alerts.component.html',
  styleUrls: ['./toast-alerts.component.css']
})
export class ToastAlertsComponent {
  constructor(private toastService: ToastService) { }
  success() {
   this.toastService.success('Success!');
   this.toastService.incrNotif();
  }
  error() {
   this.toastService.error('Oops, something went wrong.');
  }
  info() {
   this.toastService.info('Here is some more info...');
  }
  warn() {
   this.toastService.warn('This is a warning.');
  }
  clear() {
   this.toastService.clear();
  }
}