
import { Pipe, PipeTransform } from '@angular/core';
import { Vendor } from './vendor.class';

@Pipe({
  name: 'vendorSearch'
})

export class VendorSearchPipe implements PipeTransform {

  transform(vendors: Vendor[], searchCriteria: string = ""): Vendor[] {
    if(searchCriteria == "")
      return vendors;
    searchCriteria = searchCriteria.toLowerCase();
    let selectedVendors: Vendor[] = [];
    for(let vendor of vendors) {
      if(
        vendor.id.toString().includes(searchCriteria) ||
        vendor.code.toLowerCase().includes(searchCriteria) ||
        vendor.name.toLowerCase().includes(searchCriteria) ||
        vendor.city.toLowerCase().includes(searchCriteria) ||
        vendor.state.toLowerCase().includes(searchCriteria)
      ) {
        selectedVendors.push(vendor);
      }
    }
    return selectedVendors;
  }
}

