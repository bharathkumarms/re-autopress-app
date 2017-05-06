import {Component} from '@angular/core'

@Component({
    selector:'re-nav-bar',
    templateUrl:'./navbar.component.html',
    styles:[`
        
    `]
})
export class NavBarComponent{
    isIn = false;   // store state
    toggleState() { // click handler
        let bool = this.isIn;
        this.isIn = bool === false ? true : false; 
    }
}