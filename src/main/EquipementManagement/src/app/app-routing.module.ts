import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentDetailsComponent } from './student/student-details/student-details.component';
import { CatalogComponent } from './catalog/catalog.component';
import { MessageComponent } from './message/message.component';
import { CommandComponent } from './command/command.component';

const routes: Routes = [ { path: 'studentdetails', component: StudentDetailsComponent },
{ path: 'catalog', component: CatalogComponent },
{ path: 'message', component: MessageComponent },
{ path: 'command', component: CommandComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
