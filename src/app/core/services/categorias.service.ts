import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Categoria } from '../models/Categoria.interface';


@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  private readonly apiURL = environment.url + "api/v1/categoria";


  constructor(private http: HttpClient) { }



  getCategorias(): Observable<Categoria[]>
  {
    console.log(`${this.apiURL}/categorias`);
    return this.http.get<Categoria[]>(`${this.apiURL}/categorias`);
  }


}
