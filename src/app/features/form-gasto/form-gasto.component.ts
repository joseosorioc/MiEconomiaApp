import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriasService } from '../../core/services/categorias.service';
import { Categoria } from '../../core/models/Categoria.interface';
import { DetallesService } from '../../core/services/detalles.service';
import { DetalleResponseInterface } from '../../core/models/response/DetalleResponseinterface';
import { Fuente } from 'app/core/models/Fuente.interface';
import { FuentesService } from '../../core/services/fuentes.service';
import { SelectItem } from 'primeng/api';
import { Detalle } from '../../core/models/Detalle.interface';
import { DetalleRequest } from 'app/core/models/requests/DetalleRequest.interface';
import * as moment from 'moment';

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
  fuentes: Fuente [] = [];
  typesDetail: SelectItem [] = [];
  age = 19;



  constructor(private fb : FormBuilder,
              private categoriasService: CategoriasService,
              private detalleService: DetallesService,
              private fuenteService: FuentesService) {

     this.formIncomesOrExpenses = this.fb.group({
        date: ['', [Validators.required ] ],
        amount: [ '', Validators.required ],
        category: [ '', [Validators.required, Validators.pattern(/^[A-Za-z1-9]+$/g)]  ],
        account: [ '', [Validators.required, Validators.pattern(/^[A-Za-z1-9]+$/g)]  ],
        type: [ '',[ Validators.required, Validators.pattern(/^[A-Za-z1-9]+$/g)]  ],
        note: [ '', [Validators.required, Validators.maxLength] ]
     });
   }

  ngOnInit(): void {
    this.categoriasService.getCategorias().subscribe( categoriasData => {
    this.categories = categoriasData;

    this.categories.unshift({ idCategoria: 0, nombre: '', descripcion: ''});
    });

    this.detalleService.getDetalles().subscribe( detallesData => {
    this.details = detallesData;
    });

    this.fuenteService.getAllFuentes().subscribe(fuentesData => {
    this.fuentes = fuentesData;
    this.fuentes.unshift({  idFuente: 0, nombre: ''});
    });


    this.typesDetail = this.detalleService.getTypesDetails();
    this.typesDetail.unshift({value: 0 , label: '' });
    console.log(this.typesDetail);
  }


  agregarDetalle(){
    this.mostrarDialogAgregarDetalle = true;
  }

  guardarNuevoDetalle(){


    if(this.formIncomesOrExpenses.status === 'VALID'){

      const saveDetail: DetalleRequest = {
          monto:           this.formIncomesOrExpenses.controls['amount'].value,
          comentario:      this.formIncomesOrExpenses.controls['note'].value,
          caracteristica:  this.formIncomesOrExpenses.controls['type'].value,
          fechaGeneracion:  moment(this.formIncomesOrExpenses.controls['date'].value).format('MM/DD/YYYY') ,
          usuario:         1,
          categoria:       this.formIncomesOrExpenses.controls['category'].value,
          fuente:          this.formIncomesOrExpenses.controls['account'].value
        }

        console.log(saveDetail);

        this.detalleService.guardarNuevoDetalle(saveDetail).subscribe( resDetail => {
            this.details.content.push(resDetail);
        });

     }
  }




}
