import { Component } from '@angular/core';
import { Employee } from './clases/employee'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularBoostrap';
  employeeArray:Employee[]=[
    {id:1,nombre:'Raul',salario:2330,edad:25},
    {id:2,nombre:'Byron',salario:5000,edad:18},
    {id:3,nombre:'Brandon',salario:8500,edad:21}
  ];

  selectedEmployee:Employee= new Employee();

  Envio(){

    if(this.selectedEmployee.id==0){
      this.selectedEmployee.id=this.employeeArray.length +1;
      this.employeeArray.push(this.selectedEmployee);
    }
  
    this.selectedEmployee =new Employee();
  }
  Editar(employeeEdit:Employee){
    this.selectedEmployee=employeeEdit;
    // this.selectedEmployee.nombre=employeeEdit.nombre;
    // this.selectedEmployee.salario=employeeEdit.salario;
    // this.selectedEmployee.edad=employeeEdit.edad;

  }
}
