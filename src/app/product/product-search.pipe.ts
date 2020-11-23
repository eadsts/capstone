import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product.class';


@Pipe({
  name: 'productSearch'
})
export class ProductSearchPipe implements PipeTransform {

  transform(products: Product[], searchCriteria: string = ""): Product[] {
    if(searchCriteria == "")
      return products;
    searchCriteria = searchCriteria.toLowerCase();
    let selectedProducts: Product[] = [];
    for(let product of products) {
      if(
        product.id.toString().includes(searchCriteria) ||
        product.vendor.name.toLowerCase().includes(searchCriteria) ||
        product.partNbr.toLowerCase().includes(searchCriteria) ||
        product.name.toLowerCase().includes(searchCriteria) ||
        product.price.toString().includes(searchCriteria) ||
        product.unit.toLowerCase().includes(searchCriteria)
      ) {
        selectedProducts.push(product);
      }
    }
    return selectedProducts;
  }
}


