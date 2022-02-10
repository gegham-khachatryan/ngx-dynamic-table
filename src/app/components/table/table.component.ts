import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() sortBy?: string;
  @Input() sortDirection: 'asc' | 'desc' = 'asc';

  @Input() columns: IColumn[] = [];
  @Input() rows: Record<string, any>[] = [];
  @Input() templates: Record<string, TemplateRef<any>> = {};

  constructor() { }

  ngOnInit() {
  }

}
export interface IColumn {
  label: string;
  key: string;
  sortable?: boolean;
  template?: TemplateRef<any>
}