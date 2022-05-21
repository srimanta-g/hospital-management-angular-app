import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientComponent } from './patient/patient.component';
import { DoctorComponent } from './doctor/doctor.component';
import {HttpClientModule} from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateDoctorComponent } from './create-doctor/create-doctor.component';
import { FormsModule } from '@angular/forms';
import { CreatePatientComponent } from './create-patient/create-patient.component'


const appRoutes:Routes=[
  {path:'patient', component:PatientComponent},
  {path:'doctor', component:DoctorComponent},
  {path:'add-doctor',component:CreateDoctorComponent},
  {path:'add-patient',component:CreatePatientComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    DoctorComponent,
    CreateDoctorComponent,
    CreatePatientComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
