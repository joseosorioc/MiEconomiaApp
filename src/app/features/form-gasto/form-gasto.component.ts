import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriasService } from '../../core/services/categorias.service';
import { Categoria } from '../../core/models/Categoria.interface';
import { Detalle } from '../../core/models/Detalle.interface';
import { DetallesService } from '../../core/services/detalles.service';
import { DetalleResponseInterface } from '../../core/models/response/DetalleResponseinterface';

@Component({
  selector: 'form-gasto',
  templateUrl: './form-gasto.component.html',
  styleUrls: ['./form-gasto.component.css']
})
export class FormGastoComponent implements OnInit {

  formIncomesOrExpenses!: FormGroup;
  categories: Categoria [] = [];
  details : DetalleResponseInterface = {} as DetalleResponseInterface ;
  mostrarDialogAgregarDetalle: boolean = false;



  constructor(private fb : FormBuilder,
              private categoriasService: CategoriasService,
              private detalleService: DetallesService) {

     this.formIncomesOrExpenses = this.fb.group({
        date: ['', [Validators.required] ],
        amount: [ '', Validators.required ],
        category: [ '', Validators.required ],
        account: [ '', Validators.required ],
        type: [ '', Validators.required ],
        note: [ '', [Validators.required, Validators.maxLength] ]
     });
   }

  ngOnInit(): void {
    this.categoriasService.getCategorias().subscribe( categoriasData => {
    this.categories = categoriasData;
    });

    this.detalleService.getDetalles().subscribe( detallesData => {
    this.details = detallesData;
    });

  }


  agregarDetalle(){
    this.mostrarDialogAgregarDetalle = true;
  }

}
