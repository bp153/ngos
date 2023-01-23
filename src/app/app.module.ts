import { NgModule , CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA} from '@angular/core';
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

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
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';
import { providePerformance,getPerformance } from '@angular/fire/performance';
import { provideRemoteConfig,getRemoteConfig } from '@angular/fire/remote-config';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { DisplayEntryComponent } from './ngo/display-entry/display-entry.component';

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
    DisplayEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
    provideMessaging(() => getMessaging()),
    providePerformance(() => getPerformance()),
    provideRemoteConfig(() => getRemoteConfig()),
    provideStorage(() => getStorage()),
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
  providers: [
    ScreenTrackingService,UserTrackingService,NgbAlert
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
