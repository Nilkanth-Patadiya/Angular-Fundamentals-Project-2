import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  plist=[]

  constructor(private ps:ProductService) 
  {
    this.plist=this.ps.getProd();
   }

  ngOnInit(): void {
  }

}
