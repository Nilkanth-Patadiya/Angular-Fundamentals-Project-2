import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-manufacturer-list',
  templateUrl: './product-manufacturer-list.component.html',
  styleUrls: ['./product-manufacturer-list.component.css']
})
export class ProductManufacturerListComponent implements OnInit {
  plist=[]
  constructor(private ps:ProductService) 
  {
    this.plist=this.ps.getProd();
   }

  ngOnInit(): void {
  }

}
