import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'form-gasto',
  templateUrl: './form-gasto.component.html',
  styleUrls: ['./form-gasto.component.css']
})
export class FormGastoComponent implements OnInit {

  formIncomesOrExpenses!: FormGroup;

  constructor(private fb : FormBuilder) {

     this.formIncomesOrExpenses = this.fb.group({
        date: ['', Validators.required, Validators],
        amount: [ '', Validators.required ],
        category: [ '', Validators.required ],
        account: [ '', Validators.required ],
        type: [ '', Validators.required ],
        note: [ '', Validators.required, Validators.maxLength ]
     });
   }

  ngOnInit(): void {

  }


}
