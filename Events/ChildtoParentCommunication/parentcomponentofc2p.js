import { LightningElement } from 'lwc';

export default class Parentcomponentofc2p extends LightningElement {
    count = 1;
    handleEventChange() {
        this.count = this.count + 1;
         
    }
}