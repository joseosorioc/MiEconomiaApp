import { Pipe, PipeTransform } from "@angular/core";
import { IncomeOrExpenseEnum } from "../enums/IncomeOrExpense.enum";

@Pipe({
  name: 'TipoCaracteristicaPipe'
})
export class  TipoCaracteristicaPipe implements PipeTransform {



  transform(value: any) {

  const valueResult = Object.entries(IncomeOrExpenseEnum)
    .map(([key, value]) => ({id: key, value: value}))
    .filter( p => p.id === value);
console.log(valueResult[0].value)
    return valueResult[0].value;
  }

}
