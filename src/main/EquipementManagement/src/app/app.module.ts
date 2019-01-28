import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { StudentDetailsComponent } from './student/student-details/student-details.component';
import { CatalogComponent } from './catalog/catalog.component';
import { MessageComponent } from './message/message.component';
import { HttpClientModule } from '@angular/common/http';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { NavbarmenuComponent } from './navbarmenu/navbarmenu.component';
import { PanierComponent } from './panier/panier.component';
import {FormsModule} from '@angular/forms';

import { SocketDataService } from './Services/socket-data.service';
import { SocketComponent } from './socket/socket.component';
import { NotifierModule } from 'angular-notifier';
import { ToastAlertsComponent } from './toast-alerts/toast-alerts.component';
import { ToastComponent } from './components/toast-alerts/toast/toast.component';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { CommandComponent } from './command/command.component';
@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    StudentDetailsComponent,
    CatalogComponent,
    MessageComponent,
    StudentEditComponent,
    NavbarmenuComponent,
    PanierComponent,
    SocketComponent,
    ToastAlertsComponent,
    ToastComponent,
    TopNavBarComponent,
    CommandComponent,
  
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NotifierModule
  ],
  providers: [SocketDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
