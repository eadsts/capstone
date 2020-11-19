import { Product } from '../product/product.class';
import { Request } from '../request/request.class';
import { RequestlinesComponent } from "../request/requestlines/requestlines.component";

export class Requestlines {
    id: number = 0;
    requestId: number = 0;
    productId: number = 0;
    quantity: number = 1;

    request: Request = null;
    product: Product = null;

    constructor() {}

}


