import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ngxCsv } from 'ngx-csv/ngx-csv';
@Component({
  selector: 'app-csv-file',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './csv-file.component.html',
  styleUrl: './csv-file.component.css'
})
export class CsvFileComponent {
  constructor(){}
  ngOnInit(): void{

  }
  data = [
    {
      name: "Test 1",
      age: 13,
      average: 8.2,
      approved: true,
      description: "using 'Content here, content here' "
    },
    {
      name: 'Test 2',
      age: 11,
      average: 8.2,
      approved: true,
      description: "using 'Content here, content here' "
    },
    {
      name: 'Test 4',
      age: 10,
      average: 8.2,
      approved: true,
      description: "using 'Content here, content here' "
    },
  ];
  downloadCsvFile(){
    var options = { 
      fieldSeparator: ';',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true, 
      showTitle: true,
      title: 'My title',
      useBom: true,
     
      headers: ["name", "age", "average", "approved", "description"]
    };
   
    new ngxCsv(this.data, 'myFirstCsv', options);
   
  }
}
