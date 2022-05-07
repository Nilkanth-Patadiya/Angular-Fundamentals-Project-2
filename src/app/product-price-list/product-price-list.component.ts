import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-price-list',
  templateUrl: './product-price-list.component.html',
  styleUrls: ['./product-price-list.component.css']
})
export class ProductPriceListComponent implements OnInit {
  plist=[]
  constructor(private ps:ProductService) 
  {
    this.plist=this.ps.getProd();
   }
  
  ngOnInit(): void {
  }

}
