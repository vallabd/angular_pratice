import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {
 private baseUrl ="http://localhost:8080"
  constructor(private http:HttpClient) {

   }
   getMaterial(){
     return this.http.get (this.baseUrl +"/materials").toPromise()
   }
   addMaterial(material:any){
    return this.http.post (this.baseUrl +"/materials", material).toPromise()
   }
   getBillofMaterial(){
    return this.http.get (this.baseUrl +"/getBillofmaterial").toPromise()
   }

}
