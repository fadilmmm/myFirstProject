import { Component, OnInit } from '@angular/core';
import { Observable, interval } from "rxjs";

@Component({
  selector: 'app-observable-test',
  templateUrl: './observable-test.component.html',
  styleUrls: ['./observable-test.component.css']
})
export class ObservableTestComponent implements OnInit {
  seconde: number | undefined;

  constructor() { }

  ngOnInit(): void {
    const counter = interval(1000);
    counter.subscribe(
      (value: number) => {
        this.seconde = value;
      }
    );
  }
}

