import { Product } from '../product/product.class';
import { Request } from '../request/request.class';

export class Requestline {
    id: number = 0;
    requestId: number = 0;
    productId: number = 0;
    quantity: number = 1;

    request: Request = null;
    product: Product = null;

    constructor() {}

}


