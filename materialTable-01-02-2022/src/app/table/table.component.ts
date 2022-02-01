import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';


export interface EmployeeDetails {
 emp_id:number;
 first_name:string;
 last_name:string;
 department:string;
}

const ELEMENT_DATA: EmployeeDetails[] = [
  {emp_id: 1, first_name: 'Donald', last_name: "Patrick", department: 'Finance'},
  {emp_id: 2, first_name: 'Samuel', last_name: "Samson", department: 'Marketing'},
  {emp_id: 3, first_name: 'David', last_name: "Johnson", department: 'IT'},
  {emp_id: 4, first_name: 'Ronica', last_name: "Brave", department: 'Marketing'},
  {emp_id: 5, first_name: 'Andrew', last_name: "Smith", department: 'IT'},
  {emp_id: 6, first_name: 'Christine', last_name: "Salvi", department: 'Finance'},
  {emp_id: 7, first_name: 'Ian', last_name: "Jacob", department: 'Marketing'},
  {emp_id: 8, first_name: 'Erica ', last_name: "Irons", department: 'IT'},
  {emp_id: 9, first_name: 'Henry', last_name: "Jacob", department: 'Finance'},
  {emp_id: 10, first_name: 'Sam', last_name: "baisley", department: 'IT'},
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements AfterViewInit {
  displayedColumns: string[] = ['emp_id', 'first_name', 'last_name', 'department'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  applyFilter(event:Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter=filterValue.trim().toLowerCase();

  }
  rowClicked(row: any){
    console.log(row)
  }


  

 


}
