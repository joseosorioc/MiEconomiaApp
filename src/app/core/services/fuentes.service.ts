import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Fuente } from '../models/Fuente.interface';

@Injectable({
  providedIn: 'root'
})
export class FuentesService {

  private apiURL =  environment.url +  'api/v1/fuente';

  constructor( private http: HttpClient) {
  }



  getAllFuentes(): Observable<Fuente[]>
  {
    return this.http.get<Fuente[]>(`${this.apiURL}/fuentes`);
  }


}
