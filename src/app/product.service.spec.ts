import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';

const prod1=[{"productno":111,"productname":"IPHONE","manufacturer":"Apple", "price":33333},
  {"productno":121,"productname":"IPad","manufacturer":"Apple","price":34500},
  {"productno":131,"productname":"IPod","manufacturer":"Apple","price":32222},
  {"productno":141,"productname":"Moto G","manufacturer":"Lenovo","price":35678},
  {"productno":151,"productname":"Moto X","manufacturer":"Lenovo","price":43434},
  {"productno":161,"productname":"Moto E","manufacturer":"Lenovo","price":67676},
  {"productno":171,"productname":"Moto Z","manufacturer":"Lenovo","price":23123},
  {"productno":181,"productname":"Samsung Note 3","manufacturer":"Samsung","price":43211},
  {"productno":191,"productname":"Samsung Note 4","manufacturer":"Samsung","price":76433},
  {"productno":201,"productname":"Samsung Note 5","manufacturer":"Samsung","price":37890}
]

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service.getProd()).toBe(prod1);
  });
});
