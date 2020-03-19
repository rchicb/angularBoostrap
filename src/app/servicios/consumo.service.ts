import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { Employee } from '../clases/employee';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ConsumoService {
  urpApi:string ='http://127.0.0.1:8000/api/employees';
  // urpApi:string ='http://dummy.restapiexample.com/api/v1/employees';
  constructor(private http:HttpClient) { }

  obtenerValores(){
    return this.http.get<Employee[]>(this.urpApi).pipe(
      map(datos=>{
        return datos;
        // return datos['data'];
      })
    );
  }

  agregarEmployee(employeeSend:Employee){
   return this.http.post<Employee>(this.urpApi,employeeSend);
  }

}
