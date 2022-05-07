import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ProductManufacturerListComponent } from './product-manufacturer-list/product-manufacturer-list.component';
import { ProductPriceListComponent } from './product-price-list/product-price-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ParentComponent,
    ChildComponent,
    ProductManufacturerListComponent,
    ProductPriceListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
