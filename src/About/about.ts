import { bindable, BindingMode } from 'aurelia'; 

export class About {
    @bindable({ mode: BindingMode.twoWay}) firstName = 'Test';
    @bindable({ callback: 'lnameChanged' }) lastName  = 'Test';
    
    lnameChanged(val) {
        console.log(val);
        
    }
}