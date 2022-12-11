import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import cep from 'cep-promise'

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.sass']
})
export class CepComponent implements OnInit {
  @Input() cepInput: string;
  @Output() cepDetails = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
    // console.log(this.cepInput)
    this.detailCep()
  }

  detailCep(){
    cep(this.cepInput).then(
      res => this.cepDetails.emit(res)
    )
}
}
