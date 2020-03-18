import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ConsumoService {
  urpApi:string ='http://127.0.0.1:8000/api/employees';
  constructor(private http:HttpClient) { }

  obtenerValores(){
    return this.http.get(this.urpApi).pipe(
      map(datos=>{
        return datos;
      })
    );
  }

}
