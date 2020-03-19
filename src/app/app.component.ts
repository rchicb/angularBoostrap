import { Component,OnInit } from '@angular/core';
import { Employee } from './clases/employee'
import { ConsumoService } from './servicios/consumo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angularBoostrap';
  employeeArray:Employee[]=[
    {id:1,employee_name:'Raul',employee_salary:2330,employee_age:25},
    {id:2,employee_name:'Byron',employee_salary:5000,employee_age:18},
    {id:3,employee_name:'Brandon',employee_salary:8500,employee_age:21}
  ];

  employeeList:Employee[]=[];
  selectedEmployee:Employee= new Employee();
  employeeTemp:Employee=new Employee();

  constructor(private consumo:ConsumoService){}

  ngOnInit() {
    this.consumo.obtenerValores().subscribe(
      datos=>{
        this.employeeList=datos;
      }
    );
  }


  Envio(){

    // console.log(this.selectedEmployee);

    if(this.selectedEmployee.id==0){
      // this.selectedEmployee.id=this.employeeArray.length +1;
      // this.employeeArray.push(this.selectedEmployee);

      this.consumo.agregarEmployee(this.selectedEmployee).subscribe(
        datos=>{
          this.employeeTemp= datos;
        }
      );
    }
  
    this.selectedEmployee =new Employee();
  }
  Editar(employeeEdit:Employee){
    // console.log(employeeEdit);
    this.selectedEmployee=employeeEdit;
    // this.selectedEmployee.nombre=employeeEdit.nombre;
    // this.selectedEmployee.salario=employeeEdit.salario;
    // this.selectedEmployee.edad=employeeEdit.edad;

  }
}
