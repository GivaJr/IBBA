import { HandleErrorService } from './../../../core/services/handle-error.service';
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


  constructor(private error: HandleErrorService) { }

  ngOnInit(): void {
    this.detailCep()
  }

  detailCep(){
    cep(this.cepInput).then(
      res => this.cepDetails.emit(res)
    ).catch(error =>{
      this.error.handleError(error);
    })
}
}
