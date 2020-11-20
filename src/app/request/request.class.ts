import { User } from 'src/app/user/user.class' 

export class Request {
    id: number = 0;
    description: string = "";
    justification: string = "";
    rejectionReason: string = "";
    deliveryMode: string = "Pickup";
    status: string = "New";
    total: number = 0;
    username: string = "";

    userId: number = 0;
    user: User = null;

    //requestLines: IEnumerable<RequestLine> = "";

    constructor () {

    }
}
