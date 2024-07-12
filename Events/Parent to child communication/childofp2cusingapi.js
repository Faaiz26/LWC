import { LightningElement , api} from 'lwc';

export default class Childofp2cusingapi extends LightningElement {

    

    @api percantage;

    get style() {
        return `background-color:orange; min-height:50px; width:${this.percantage}%; min-width:10px; border:1px solid black;`
        
    }


   

}