import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  pv1:string='Accenture';
  pv2:number=10000;

  constructor() { }

  ngOnInit(): void {
  }

}
