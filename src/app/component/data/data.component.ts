import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators,FormControl, FormArray} from '@angular/forms';
import { Observable } from 'rxjs/Rx'
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent  {
  forma:FormGroup;
  constructor() {
    this.forma=new FormGroup({
      'nombre':new FormControl('',[Validators.required,
                                  Validators.minLength(3)]),
      'apellido':new FormControl('',Validators.required),
      'correo':new FormControl('',[Validators.required,
                                  Validators.pattern("[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}")
                                ]),
       'pasatiempos':new FormArray([
          new FormControl('',Validators.required)
       ]),
       'userName':new FormControl("",Validators.required,this.existeUsuario),

       'password1':new FormControl("",Validators.required),
       'password2': new FormControl()                        
    })
      this.forma.controls['password2'].setValidators([
        Validators.required,
        this.noIgual.bind(this.forma)
      ])
   }
   enviarDatos(){
     console.log(this.forma.value);
     this.forma.reset({
          nombre:"",
          apellido:"",
          correo:"",
          pasatiempo:"",
          password1:"",
          password2:""
     });
   }
   existeUsuario(control:FormControl):Promise<any>|Observable<any>{
    let promesa=new Promise(
      (resolve,reject)=>
      setTimeout(()=>{
        if ((control.value==="fer")||(control.value==="fer.barragan")){
          resolve({existe:true})
        }
        else{
          resolve(null)
        }
      },2000)
    )
    return promesa; 
   }  
    
   
   agregaPasatiempo(){
     (<FormArray>this.forma.controls['pasatiempos']).push(
       new FormControl('',Validators.required)) 
   }
    noIgual(control:FormControl):{ [s:string]:boolean} {
      let forma:any=this;
      if(control.value!==forma.controls['password1'].value){
        return{
          noIguales:true
        } 
       
      }  
      return null
    }

  

  
}
