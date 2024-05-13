import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';


@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [CommonModule,
  
    
  ],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {
  public firstName = "fadil";
  public title = "pipe video ytb";

  public student =  {
    "fullName" : "Ahmed essa",
    "scholl" : "School Name"
  }

  public myDate = new Date();

  
}
