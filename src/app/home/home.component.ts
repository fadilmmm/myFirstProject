import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserComponent } from '../user/user.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  firstname="fadil";
  active =true;

  dataList = [
    {name : "fadil" ,code :165 ,country : "maroc"},
    {name : "ismail" ,code :250 ,country : "tunisia"},
    {name : "nassim" ,code :654 ,country : "algeria"}
  ]

  name ="Moussa";
  constructor(private route: Router) { }
  

  goToUser() {
    this.route.navigate(["/user"]);
  }


}

