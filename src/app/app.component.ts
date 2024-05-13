import { Component, NgModule } from '@angular/core';


import { UserComponent } from './user/user.component';

import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ClassComponent } from './class/class.component';
import { CommonModule, NgClass } from '@angular/common';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { HttpClientModule } from '@angular/common/http';






@Component({
  selector: 'app-root',
  standalone: true,
  
  
  imports: [
  
  HeaderComponent,
  RouterOutlet,
  RouterLink,
  ClassComponent, 
  CommonModule,
  NgClass,
  ParentComponent,
  ChildComponent,
  HttpClientModule,

  
  
 

  ],

    
  
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myFirstProject';
}

