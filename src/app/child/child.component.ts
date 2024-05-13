import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { ParentComponent } from '../parent/parent.component';



@Component({
  selector: 'app-child',
  standalone: true,
  imports: [ParentComponent],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
 @Output() public childEvent = new EventEmitter();
 @Input() public nameFromParent: any;

 public eventChild(){
  this.childEvent.emit("Message from child to parent");
 }
}


