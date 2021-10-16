import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders ,HttpErrorResponse} from '@angular/common/http';
/*import { Ilanguage } from './language';*/
/*import { Observable } from 'rxjs/Observable';*/
import {Observable , of , throwError} from 'rxjs';
import {map} from 'rxjs/operators'
/*import "rxjs/add/operator/catch";
 import "rxjs/add/observable/throw";*/
import {Cour} from './cour'

const baseUrl ='http://localhost:3500/ttcours';
@Injectable({
  providedIn: 'root'
})
export class S1Service {

  constructor(private http: HttpClient) {}

     getCours(){
       return  this.http.get<Cour[]>("http://localhost:3500/ttcours")
        .pipe(
          map(response=>response)
        );
     }

   getCourById(id : String){
       return  this.http.get<Cour>("http://localhost:3500/cours/"+id)
        .pipe(
          map(response=>response)
        );
     }



 addCours(cour : Cour){
   let headers = new HttpHeaders ({
     'Content-type':'application/json'
   });
   let options = {
     headers :headers
   }

   return this.http.post<Cour[]>("http://localhost:3500/cours/add" ,JSON.stringify(cour),options)

   .pipe(
     map(response=>response)
   );
 }

 UpdateCour(cour :Cour){
   let headers = new HttpHeaders ({
     'Content-type':'application/json'
   });
   let options = {
     headers :headers
   }

   return this.http.put<Cour[]>("http://localhost:3500/cour/"+cour._id ,JSON.stringify(cour),options)

   .pipe(
     map(response=>response)
   );
 }

 DeleteCour(cour :Cour){
   let headers = new HttpHeaders ({
     'Content-type':'application/json'
   });
   let options = {
     headers :headers
   }

   return this.http.delete<Cour[]>("http://localhost:3500/courss/"+cour._id,options)

   .pipe(
     map(response=>response)
   );
 }


  }
