import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cnpj'
})
export class CnpjPipe implements PipeTransform {

  transform(value: any){

    // Ignora caso venham sem valores
    if(value == null || value == undefined){
        return
    }

    // Remove caracteres especiais
    value = value.toString().replace(/\D/g,"")
    //Coloca ponto entre o segundo e o terceiro dígitos
    value = value.toString().replace(/^(\d{2})(\d)/,"$1.$2")

    //Coloca ponto entre o quinto e o sexto dígitos
    value = value.toString().replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3")

    //Coloca uma barra entre o oitavo e o nono dígitos
    value = value.toString().replace(/\.(\d{3})(\d)/,".$1/$2")

    //Coloca um hífen depois do bloco de quatro dígitos
    value = value.toString().replace(/(\d{4})(\d)/,"$1-$2")

    return value;

}

}
