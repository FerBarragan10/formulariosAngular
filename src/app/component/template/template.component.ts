import { Component, OnInit } from '@angular/core';
import{FormsModule, NgForm} from '@angular/forms';
@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`.ng-invalid.ng-touched:not(form){
    border: 1px solid red;
  }
  `]
})
export class TemplateComponent implements OnInit {
 usuario:Object={
   Nombre:null,
   Apellido:null,
   Correo:null,
   Pais:"",
   Sexo:"Hombre",
   Acepta:false
   }
   
   //dinamico
   Sexos:String[]=["Hombre","Mujer","Trans","Otro"];
  Paises=[{
    codigo:"ARG",
    country:"Argentina"
  },
    {
      codigo:"BRA",
      country:"Brasil"
    },
    {
      codigo:"PAR",
      country:"Paraguay"
    },
    {
      codigo:"URU",
      country:"Uruguay"
    },
    {
      codigo:"CHI",
      country:"Chile"
    }
]

  constructor() { }

  ngOnInit() {
  }
  guardarValores(forma:NgForm){
   
    console.log(this.usuario);
  }
}
