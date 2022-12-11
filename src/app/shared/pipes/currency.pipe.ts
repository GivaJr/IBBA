import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {

  transform(value): string {
    if (!value) return;
    return value.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
  }
}
