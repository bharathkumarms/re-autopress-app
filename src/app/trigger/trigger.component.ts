import {Component} from '@angular/core'

@Component({
    selector:'re-trigger',
    templateUrl:'./trigger.component.html',
    styles:[`
        
    `]
})
export class TriggerComponent{
    isIn = false;   // store state
    toggleStateTrigger() { // click handler
        let bool = this.isIn;
        this.isIn = bool === false ? true : false; 
    }
}