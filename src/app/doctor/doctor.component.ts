import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  data:any = []
  singleData:any = []

  constructor(private service:AppServiceService) {
    
   }

  getDoctorById(dId:number) {
    this.service.getDoctorById(dId).subscribe((data) => {
      this.singleData = data;
    })
  }

  deleteDoctorById(dId:number) {
    this.service.deleteDoctor(dId).subscribe(()=>{
      this.ngOnInit();
    });
  }

  ngOnInit(): void {
    this.service.getAllDoctors().subscribe(data=> {
      console.log(data);
      this.data = data;
    })
  }

}
