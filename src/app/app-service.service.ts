import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { Doctor } from './Doctor';
import { Patient } from './Patient';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http:HttpClient) { }

    getAllDoctors()
    {
      let url = 'http://localhost:8080/doctor';
      return this.http.get(url);
    }

    deleteDoctor(dId:number) {
      let url = 'http://localhost:8080/doctor/' + dId;
      return this.http.delete(url, {responseType: 'text'});
    }

    getDoctorById(dId:number) {
      let url = 'http://localhost:8080/doctor/' + dId;
      return this.http.get(url);
    }

    addNewDoctor(data:Doctor) {
      let url = 'http://localhost:8080/doctor';
      return this.http.post(url, data, {responseType: 'text'});
    }

    addNewPatient(data:Patient) {
      let url = 'http://localhost:8080/patient';
      return this.http.post(url, data, {observe:'response'});
    }

    getPatientById(pId:number) {
      let url = 'http://localhost:8080/patient/' + pId;
      return this.http.get(url);
    }
}
