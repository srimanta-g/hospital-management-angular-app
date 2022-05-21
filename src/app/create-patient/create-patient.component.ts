import { Component, OnInit } from '@angular/core';
import {AppServiceService } from '../app-service.service'
import { Patient } from '../Patient'

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent implements OnInit {

  data:any = []
  patient: Patient = new Patient();

  constructor(private service:AppServiceService) { }

  ngOnInit(): void {
    this.service.getAllDoctors().subscribe(data=> {
      console.log(data);
      this.data = data;
    })
  }

  
  addPatient(data:any) {
    console.log(data)
    this.patient.patientId = data.patientId;
    this.patient.patientName = data.patientName;
    this.patient.patientAge = data.patientAge;
    this.patient.visitedDoctorName = data.doctorAttended;
    this.patient.dateOfVisit = data.date;
    this.patient.prescription = data.prescription;

    console.log(this.patient)

    this.service.addNewPatient(this.patient).subscribe((response) => {
      console.log(response.status);
    }, (error) => {
      alert("Patient id already present");
    })
  }

}
