import { Categoria } from "./Categoria.interface";
import { Fuente } from "./Fuente.interface";
import { Usuario } from "./Usuario.interface";

export interface Welcome {
  idDetalle:       number;
  monto:           number;
  comentario:      string;
  caracteristica:  string;
  fechaGeneracion: Date;
  usuario:         Usuario;
  categoria:       Categoria;
  fuente:          Fuente;
}
