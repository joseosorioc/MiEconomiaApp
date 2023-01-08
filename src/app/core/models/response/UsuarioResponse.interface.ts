import { Pageable } from "../pageable/Pageable.interface";
import { Sort } from "../pageable/Sort.interface";
import { Usuario } from "../Usuario.interface";

export interface DetalleResponseInterface{
  content:          Usuario ;
  pageable:         Pageable;
  totalPages:       number;
  last:             boolean;
  totalElements:    number;
  size:             number;
  number:           number;
  sort:             Sort;
  numberOfElements: number;
  first:            boolean;
  empty:            boolean;
}
