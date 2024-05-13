import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  name = "ahmed";
  age = "10";
  status = "activé";



  constructor(private router : Router,
    
  ){}

getstatus(){
  return(this.status);
}  
getMessage(){
  console.log("My new message");
}
goToHome(){
  this.router.navigate(["/home"]);
}

}
