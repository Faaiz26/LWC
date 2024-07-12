import { LightningElement } from 'lwc';

export default class Parentofp2cusingapi extends LightningElement {
    percantage = 10;

    handleonchange(event) {
        this.percantage = event.target.value;
    }

   
}