import { RoutesRecognized } from '@angular/router';

export class Menu {
    display: string;
    route: string;
      
      constructor(display: string, route: string) { 
        this.display = display;
        this.route = route;
      }
    
}