import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TempPageComponent } from './ngo/template/temp-page/temp-page.component';
import { DashboardComponent } from './ngo/dashboard/dashboard.component';
import { EntryFormComponent } from './ngo/entry-form/entry-form.component';
import { ReportComponent } from './ngo/report/report.component';
import { DisplayEntryComponent} from './ngo/display-entry/display-entry.component';

import { ReportsComponent} from './supervisor/reports/reports.component';
import { AddNgoComponent} from './supervisor/add-ngo/add-ngo.component';
import { AddUserComponent} from './supervisor/add-user/add-user.component';
import { SupervisorDashboardComponent} from './supervisor/supervisor-dashboard/supervisor-dashboard.component';


const routes: Routes = [  {path:'',redirectTo:'login',pathMatch:'full'},
{ path: 'login', component: LoginComponent },
{path: 'ngo', component: TempPageComponent,
children: [
 
  { path: 'dashboard', component: DashboardComponent },
  { path: 'entry', component: EntryFormComponent  },
  { path: 'report', component: ReportComponent},
  { path: 'add-ngo', component: AddNgoComponent},
  { path: 'display-entries', component: DisplayEntryComponent},
] },
{path: 'supervisor', component: TempPageComponent,
children: [
 
  { path: 'dashboard', component: DashboardComponent },
  { path: 'entry', component: EntryFormComponent  },
  { path: 'report', component: ReportComponent},
  { path: 'add-user', component: AddUserComponent}
] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
