import { IbbaService } from './../../../services/ibba.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { IBusiness } from 'src/app/shared/models/IBusiness';

@Component({
  selector: 'app-polo-detail',
  templateUrl: './polo-detail.component.html',
  styleUrls: ['./polo-detail.component.sass']
})
export class PoloDetailComponent implements OnInit {

  dataPolo:IBusiness;

  constructor(private ibbaService: IbbaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.detailPoles();
  }

  detailPoles(){
    const idPolo = parseInt(this.route.snapshot.paramMap.get('id'));
    this.ibbaService.getDetailPoles(idPolo).subscribe(res =>{
    this.dataPolo = res;
    })
  }

  applyFilter(event){

  }
}
