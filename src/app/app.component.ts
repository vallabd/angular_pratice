import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { MaterialService } from './material.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'demoMes';
  output:any = 'defaultoutput';
  example: any;
  materialoutput: any;

  constructor(private http:HttpClient,private api:MaterialService){
    
  }
  loadMaterial(){
    // this.http.get("http://localhost:8080/getMaterialDetails").toPromise().then((res)=>{
    //   this.output=res})
    let result=this.api.getMaterial();
    result.then((res:any)=>{
      console.log(res)
      this.output=res
    })
    // this.api.getMaterial().then((res: any)=>{
    //   console.log(res)}
    // )
  }
  addMatrial(){
    let result= this.api.addMaterial(this.example);
    // result.then((mat:any)=>{
    //   console.log(mat)
    // })
  }
  

alert() {
  alert( this.example+" is added to list");
}
BillOfMaterial(){
  let result=this.api.getBillofMaterial();
    result.then((res:any)=>{
      console.log(res)
      this.materialoutput=res
    })

 }

}
