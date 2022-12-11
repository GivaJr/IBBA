import { CurrencyPipe } from './../../../../shared/pipes/currency.pipe';
import { CnpjPipe } from './../../../../shared/pipes/cnpj.pipe';
import { IbbaService } from './../../../services/ibba.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { IBusiness } from 'src/app/shared/models/IBusiness';
import { FormControl, FormGroup } from '@angular/forms';
import { Address } from 'src/app/shared/models/address';

@Component({
  selector: 'app-polo-detail',
  templateUrl: './polo-detail.component.html',
  styleUrls: ['./polo-detail.component.sass']
})
export class PoloDetailComponent implements OnInit {

  dataPolo:IBusiness = {
    active: false,
    business: '',
    cep: '',
    cnpj: 0,
    id: 0,
    name: '',
    valuation: 0
  };

  optionSelect:any[] = [{valueView:'Sim', value:true}, {valueView:'Não', value:false}]
  formIBusiness: FormGroup;

  addressDetail:Address = {
    cep:'',
    state: '',
    city: '',
    neighborhood: '',
    street: '',
    service: ''
} ;

  constructor(private ibbaService: IbbaService, private route: ActivatedRoute,
    private cnpjPipe: CnpjPipe, private currency: CurrencyPipe) {
   }

  ngOnInit(): void {
    this.detailPoles();
  }


  detailPoles(){
    const idPolo = parseInt(this.route.snapshot.paramMap.get('id'));
    this.ibbaService.getDetailPoles(idPolo).subscribe(res =>{
    this.dataPolo = res;
    this.createForm();
    this.setValueForm(this.dataPolo);
    })
  }

  createForm() {
    this.formIBusiness = new FormGroup({
      name: new FormControl(''),
      cnpj: new FormControl(''),
      active: new FormControl(''),
      business: new FormControl(''),
      valuation: new FormControl('')
    })
  }

  setValueForm(form: IBusiness){
    this.formIBusiness.controls.name.setValue(form.name)
    this.formIBusiness.controls.cnpj.setValue(this.cnpjPipe.transform(form.cnpj))
    this.formIBusiness.controls.active.setValue(form.active)
    this.formIBusiness.controls.business.setValue(form.business)
    this.formIBusiness.controls.valuation.setValue(this.currency.transform(form.valuation))

  }

  setInfoAddress($event){
    this.addressDetail = $event
  }
}
