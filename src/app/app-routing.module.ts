import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TempPageComponent } from './ngo/template/temp-page/temp-page.component';
import { DashboardComponent } from './ngo/dashboard/dashboard.component';
import { EntryFormComponent } from './ngo/entry-form/entry-form.component';
import { ReportComponent } from './ngo/report/report.component';
import { ViewEntryComponent } from './ngo/view-entry/view-entry.component';
import { DisplayEntryComponent} from './ngo/display-entry/display-entry.component';
import { AllExcelReportComponent } from './ngo/all-excel-report/all-excel-report.component';
import {YearlyReportComponent } from './ngo/yearly-report/yearly-report.component';
import {YearlyDashboardComponent } from './ngo/yearly-dashboard/yearly-dashboard.component';
import { UpdateAccountComponent } from './ngo/update-account/update-account.component';

import {CannotAccessComponent } from './ngo/cannot-access/cannot-access.component';
import { MonthlyExcelReportsComponent } from './ngo/monthly-excel-reports/monthly-excel-reports.component';

import { SupervisorTempComponent } from './supervisor/supervisor-temp/supervisor-temp.component';
import { ReportsComponent} from './supervisor/reports/reports.component';
import { AddNgoComponent} from './supervisor/add-ngo/add-ngo.component';
import { AddUserComponent} from './supervisor/add-user/add-user.component';
import { SupervisorDashboardComponent} from './supervisor/supervisor-dashboard/supervisor-dashboard.component';
import { SsupervisorReportsComponent} from './supervisor/ssupervisor-reports/ssupervisor-reports.component';
import { SupervisorYearlyReportsComponent} from './supervisor/supervisor-yearly-reports/supervisor-yearly-reports.component';
import { SupervisorAllReportsComponent } from './supervisor/supervisor-all-reports/supervisor-all-reports.component';

import { AuthGuardGuard } from './auth-guard.guard';
import { NgoGuardsGuard} from './guards/ngo-guards.guard';


const routes: Routes = [  {path:'',redirectTo:'login',pathMatch:'full'},
{ path: 'login', component: LoginComponent },
{path: 'ngo', component: TempPageComponent,canActivate: [AuthGuardGuard,NgoGuardsGuard],
children: [
 
  { path: 'dashboard', component: DashboardComponent },
  { path: 'entry', component: EntryFormComponent  },
  { path: 'report', component: ReportComponent},
  { path: 'add-ngo', component: AddNgoComponent},
  { path: 'display-entries', component: DisplayEntryComponent},
  { path: 'monthly-excel-reports', component: MonthlyExcelReportsComponent},
  { path: 'view-entry/:id', component:ViewEntryComponent},
  { path: 'all-entries', component:AllExcelReportComponent},
  { path: 'yearly-report', component:YearlyReportComponent },
  { path: 'yearly-dashboard/:year', component:YearlyDashboardComponent },
  { path: 'cannot-access', component:YearlyReportComponent },
  { path: 'update-account', component:UpdateAccountComponent },
] },
{path: 'supervisor', component:  SupervisorTempComponent,
children: [
 
  { path: 'dashboard', component: SupervisorDashboardComponent },
  { path: 'entry', component: EntryFormComponent  },
  { path: 'reports', component: SsupervisorReportsComponent},
  { path: 'add-user', component: AddUserComponent},
  { path: 'yearly-report', component:  SupervisorYearlyReportsComponent},
  { path: 'all-report', component:  SupervisorAllReportsComponent}
 
] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
