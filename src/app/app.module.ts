import { NgModule , CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA} from '@angular/core';
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './shared/auth.interceptor';
import { HighchartsChartModule } from 'highcharts-angular';

import {NgbAlert} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './ngo/dashboard/dashboard.component';
import { EntryFormComponent } from './ngo/entry-form/entry-form.component';
import { ReportComponent } from './ngo/report/report.component';
import { TopNavComponent } from './ngo/template/top-nav/top-nav.component';
import { TempPageComponent } from './ngo/template/temp-page/temp-page.component';
import { LoginComponent } from './login/login.component';
import { ReportsComponent } from './supervisor/reports/reports.component';
import { SupervisorDashboardComponent } from './supervisor/supervisor-dashboard/supervisor-dashboard.component';
import { AddNgoComponent } from './supervisor/add-ngo/add-ngo.component';
import { AddUserComponent } from './supervisor/add-user/add-user.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { environment } from '../environments/environment';

import { provideStorage,getStorage } from '@angular/fire/storage';
import { DisplayEntryComponent } from './ngo/display-entry/display-entry.component';
import { MonthlyExcelReportsComponent } from './ngo/monthly-excel-reports/monthly-excel-reports.component';
import { ViewEntryComponent } from './ngo/view-entry/view-entry.component';
import { AllExcelReportComponent } from './ngo/all-excel-report/all-excel-report.component';

import { ChartModule } from 'angular-highcharts';
import { YearlyReportComponent } from './ngo/yearly-report/yearly-report.component';
import { CannotAccessComponent } from './ngo/cannot-access/cannot-access.component';
import { YearlyReportsComponent } from './supervisor/yearly-reports/yearly-reports.component';
import { AllReportsComponent } from './supervisor/all-reports/all-reports.component';
import { SupervisorTopNavComponent } from './supervisor/supervisor-top-nav/supervisor-top-nav.component';
import { SupervisorTempComponent } from './supervisor/supervisor-temp/supervisor-temp.component';
import { YearlyDashboardComponent } from './ngo/yearly-dashboard/yearly-dashboard.component';

import { UpdateAccountComponent } from './ngo/update-account/update-account.component';
import { SupervisorYearlyReportsComponent } from './supervisor/supervisor-yearly-reports/supervisor-yearly-reports.component';
import { SsupervisorReportsComponent } from './supervisor/ssupervisor-reports/ssupervisor-reports.component';
import { SupervisorAllReportsComponent } from './supervisor/supervisor-all-reports/supervisor-all-reports.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    EntryFormComponent,
    ReportComponent,
    TopNavComponent,
    TempPageComponent,
    LoginComponent,
    ReportsComponent,
    SupervisorDashboardComponent,
    AddNgoComponent,
    AddUserComponent,
    DisplayEntryComponent,
    MonthlyExcelReportsComponent,
    ViewEntryComponent,
    AllExcelReportComponent,
    YearlyReportComponent,
    CannotAccessComponent,
    YearlyReportsComponent,
    AllReportsComponent,
    SupervisorTopNavComponent,
    SupervisorTempComponent,
    YearlyDashboardComponent,

    UpdateAccountComponent,
     SupervisorYearlyReportsComponent,
     SsupervisorReportsComponent,
     SupervisorAllReportsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    HighchartsChartModule,
    BrowserAnimationsModule,
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),

    ChartModule 
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
  providers: [
    NgbAlert,
    {provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
