import {Component} from '@angular/core'

@Component({
    selector:'re-device',
    templateUrl:'./device.component.html',
    styles:[`
        
    `]
})
export class DeviceComponent{
    isIn = false;   // store state
    toggleStateDevice() { // click handler
        let bool = this.isIn;
        this.isIn = bool === false ? true : false; 
    }
}