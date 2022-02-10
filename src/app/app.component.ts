import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { IColumn } from './components/table/table.component';

interface IRow {
  id: number;
  checked: boolean;
  name: string;
  bday: string;
  role: number;
  avatar: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  // @ViewChild('colRole') colRole: TemplateRef<any> | undefined;
  // @ViewChild('colAvatar') colAvatar: TemplateRef<any> | undefined;
  // @ViewChild('colActions') colActions: TemplateRef<any> | undefined;
  // @ViewChild('colCheckbox') colCheckbox: TemplateRef<any> | undefined;

  constructor() {

  }
  public cols: IColumn[] = [];
  public data: IRow[] = [
    {
      id: 1,
      checked: false,
      name: "Valod",
      bday: "Jul 30 1990",
      role: 1,
      avatar: "https://avatars.dicebear.com/api/big-ears/your-custom-seed.svg",
    },
    {
      id: 2,
      checked: false,
      name: "Gago",
      bday: "Jul 30 1990",
      role: 2,
      avatar: "https://avatars.dicebear.com/api/adventurer/your-custom-seed.svg",
    },
    {
      id: 3,
      checked: false,
      name: "Gugo",
      bday: "Jul 30 1990",
      role: 1,
      avatar: "https://avatars.dicebear.com/api/big-ears-neutral/your-custom-seed.svg",
    },
    {
      id: 4,
      checked: false,
      name: "Ando",
      bday: "Jul 30 1990",
      role: 1,
      avatar: "https://avatars.dicebear.com/api/big-smile/your-custom-seed.svg",
    },
    {
      id: 5,
      checked: false,
      name: "Rubo",
      bday: "Jul 30 1990",
      role: 1,
      avatar: "https://avatars.dicebear.com/api/bottts/your-custom-seed.svg",
    },
    {
      id: 6,
      checked: false,
      name: "Davo",
      bday: "Jul 30 1990",
      role: 1,
      avatar: "https://avatars.dicebear.com/api/croodles/your-custom-seed.svg",
    },
  ];

  ngAfterViewInit() {
  }

  ngOnInit() {
    this.cols = [
      { label: "", key: "checkbox", sortable: false },
      { label: "", key: "avatar", sortable: false },
      { label: "Name", key: "name", sortable: false },
      { label: "Birthday", key: "bday", sortable: false },
      { label: "Role", key: "role", sortable: false },
      { label: "Actions", key: "actions", sortable: false },
    ]
  }

  clicked(e: IRow): void {
    alert(`${e.name} row button clicked!`)
  }
}
