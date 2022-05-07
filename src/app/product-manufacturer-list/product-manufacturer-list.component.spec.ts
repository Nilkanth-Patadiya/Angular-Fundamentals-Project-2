import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductManufacturerListComponent } from './product-manufacturer-list.component';

describe('ProductManufacturerListComponent', () => {
  let component: ProductManufacturerListComponent;
  let fixture: ComponentFixture<ProductManufacturerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductManufacturerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductManufacturerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
