import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-class',
  standalone: true,
  imports: [NgClass],
  templateUrl: './class.component.html',
  styleUrl: './class.component.css'
})
export class ClassComponent {

maroc = true;
brazil = false;
tunisia = false;

changeCountry(){
  this.maroc=false;
  this.brazil=true;
  this.tunisia=false;
}

}
