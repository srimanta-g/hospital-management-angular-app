import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { Doctor } from '../Doctor'
@Component({
  selector: 'app-create-doctor',
  templateUrl: './create-doctor.component.html',
  styleUrls: ['./create-doctor.component.css']
})
export class CreateDoctorComponent implements OnInit {

  doctor:Doctor = new Doctor();

  constructor(private service:AppServiceService) { }

  ngOnInit(): void {
  }

  addDoctor(data:any) {
    
    this.doctor.doctorId = data.doctorId;
    this.doctor.doctorName = data.doctorName;
    this.doctor.numberOfPatientAttended = data.numberOfPatientAttended;
    this.doctor.specializationField = data.specializationField;


    this.service.addNewDoctor(this.doctor).subscribe((data) => {
      
        alert(data);
    })
    console.log(this.doctor);
  }

}
