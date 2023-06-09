import { Component } from '@angular/core';
import { DataTablesResponse } from '../models/dataTableResp';

@Component({
  selector: 'app-with-ajax',
  templateUrl: './with-ajax.component.html',
  styleUrls: ['./with-ajax.component.css']
})

export class WithAjaxComponent {
  dtOptions: DataTables.Settings = {};

  ngOnInit(): void {
    this.dtOptions = {
      ajax: (dataTablesParameters: any, callback) => {
        that.http
          .post<DataTablesResponse>(
            'https://xtlncifojk.eu07.qoddiapp.com/',
            dataTablesParameters, {}
          ).subscribe(resp:any => {
            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsFiltered,
              data: resp.data             // <-- see here
            });
          });
      },
      columns: [{
        title: 'ID',
        data: 'id'
      }, {
        title: 'First name',
        data: 'firstName'
      }, {
        title: 'Last name',
        data: 'lastName'
      }]
    };
  }
}
