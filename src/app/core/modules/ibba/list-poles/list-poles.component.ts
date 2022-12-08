import { IbbaService } from './../../../services/ibba.service';
import {Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { IBusiness } from 'src/app/shared/models/IBusiness';


@Component({
  selector: 'app-list-poles',
  templateUrl: './list-poles.component.html',
  styleUrls: ['./list-poles.component.sass']
})
export class ListPolesComponent implements OnInit  {

  displayedColumns: string[] = ['name','business', 'valuation', 'situacao', 'acao'];
  dataSource: MatTableDataSource<IBusiness>;
  dataSourceLength:number = 0;

  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private IBBAService: IbbaService) { }

  ngOnInit(): void {
    this.ListPoles();
  }

  ListPoles(){
    this.IBBAService.getListPoles().subscribe(polo =>{
      this.dataSource = new MatTableDataSource<IBusiness>(polo);
      this.dataSource.paginator = this.paginator;
    })
  }

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if(this.dataSource.paginator){
      this.dataSource.paginator.firstPage();
    }

  }
}

