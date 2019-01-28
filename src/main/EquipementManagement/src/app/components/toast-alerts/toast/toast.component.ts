import { Component, OnInit } from '@angular/core';
import { IToast } from 'src/app/entities/IToast';
import {ToastService} from 'src/app/Services/toaster/toaster.service'

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {
  toasts: IToast[] = [];
  constructor(private toastService: ToastService) { }
  ngOnInit(): void {
   this.toastService.getToast().subscribe((toast: IToast) => {
    if (!toast) {
     this.toasts = [];
     return;
    }
    this.toasts.push(toast);
    setTimeout(() => this.removeToast(toast), 3000);
   });
  }
  removeToast(toast: IToast): void {
   this.toasts = this.toasts.filter(x => x !== toast);
  }
}