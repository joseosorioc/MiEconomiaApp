import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetallesService {

  private apiURL = environment.url + "";

  constructor( private http: HttpClient ) {

  }

  /*
  public getDetalles() : Observable<any>
  {
    this.
  }

*/



}
