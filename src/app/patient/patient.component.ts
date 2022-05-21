import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';


@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  patient: any = []

  constructor(private service: AppServiceService) { }

  ngOnInit(): void {
  }


  onClick(data:any) {
    this.service.getPatientById(data.patientId).subscribe((data)=>{
      this.patient = data;
    }, (error) => {
      alert("Patient id not present");
    })
  }
}
