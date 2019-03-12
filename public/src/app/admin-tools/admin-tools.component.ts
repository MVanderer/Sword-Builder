import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-admin-tools',
  templateUrl: './admin-tools.component.html',
  styleUrls: ['./admin-tools.component.css']
})

/*
  MR: may be more of a opinion but the file structure of the project could be refined.
  Having a component with child components in the same folder can make it tough to read 
*/
export class AdminToolsComponent implements OnInit {

  errors:any;
  partTypeList:any;

  constructor(
    //MR: This feels like a leftover but you probably don't need it
    private _db: DatabaseService,
  ) { }

  ngOnInit() {
    //partTypeList feeds strings for db request filtering to the components. Add more fields to array elements for more functionality, i.e. updating stuff in real time
    this.partTypeList=[
      {type:"blade"},
      {type:"guard"},
      {type:"grip"},
      {type:"pommel"}];
  }

}
