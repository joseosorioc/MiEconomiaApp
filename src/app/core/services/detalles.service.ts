import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { SelectItem } from 'primeng/api';
import { Observable } from 'rxjs';
import { DetalleResponseInterface } from '../models/response/DetalleResponseinterface';
import { IncomeOrExpenseEnum } from '../enums/IncomeOrExpense.enum';
import { DetalleRequest } from '../models/requests/DetalleRequest.interface';

@Injectable({
  providedIn: 'root'
})
export class DetallesService {

  private apiURL = environment.url + "api/v1/detalle";

  constructor( private http: HttpClient ) {

  }

  public getTypesDetails(): SelectItem[]
  {
    return Object.keys(IncomeOrExpenseEnum)
              .map(key => ({ value: key , label: IncomeOrExpenseEnum[key] }))

  }

  public getDetalles() : Observable<DetalleResponseInterface>
  {
    return this.http.get<DetalleResponseInterface>(`${this.apiURL}/detalles`);
  }

  public guardarNuevoDetalle(detalleRequest: DetalleRequest ): Observable<any> {
    return this.http.post(`${this.apiURL}/detalle`, detalleRequest);
  }




}
