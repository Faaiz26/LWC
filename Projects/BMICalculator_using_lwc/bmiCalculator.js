import { LightningElement } from 'lwc';

export default class BmiCalculator extends LightningElement {

    height = '';
    weight = '';
    bmiValue = '';
    result = '';


    inputHandler(event) {
        const { name, value } = event.target
        
        if (name === 'height') {
            this.height = value;
        }
        if (name === 'weight') {
            this.weight = value;
        }
    }

    submitHandler(event) {
        event.preventDefault();
        console.log("Heigth is",this.height);
        console.log("Weight is", this.weight);
        this.calculate();
        
    }

    calculate() {
        
        let height = Number(this.height)/100;
        let weight = Number(this.weight);

        let bmi = Number((weight / (height * height)).toFixed(2));

        let result = this.result;

        

        this.bmiValue = bmi;


        if (this.bmiValue < 18.5) {
            this.result = 'UnderWeight';
        } else if (this.bmiValue >= 18.5 && this.bmiValue <= 24.9) {
            this.result = 'Healthy Weight';
        } else if (this.bmiValue >= 25.0 && this.bmiValue <= 29.9) {
            this.result = 'OverWeight';
        } else if (this.bmiValue >= 30) {
            this.result = 'obese';
        }
        console.log("BMI Value is : ", bmi);
        console.log("Result is : ", result);
            

    }
    recalculate() {
        this.height = '';
        this.weight = '';
        this.bmiValue = '';
        this.result = '';
        
    }

    }
