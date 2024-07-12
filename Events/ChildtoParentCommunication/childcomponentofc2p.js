import { LightningElement } from 'lwc';

export default class Childcomponentofc2p extends LightningElement {

    handleOnClick() {
        this.dispatchEvent(new CustomEvent('increasercount'));
    }
}