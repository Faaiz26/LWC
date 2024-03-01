import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {

    selected = {} // for storing answers
    correctAnswers = 0 // to show the number of results.
    isSubmitted = false // use to show result



    myQuestions = [
        {
            id: "Question 1",
            question: "Which one of the following is not a template loop ?",
            answers: {
                a: 'for:each',
                b: 'iterator',
                c:"map loop"
            },
            correctAnswer : 'c'
        },
        {
            id: "Question 2",
            question: "Which one of the file is invalid in LWC component folder?",
            answers: {
                a: '.svg',
                b: '.apex',
                c:".js"
            },
            correctAnswer : 'b'
        },
        {
            id: "Question 3",
            question: "Which one of the following is not a directive ?",
            answers: {
                a: 'for:each',
                b: 'if:true',
                c:"@track"
            },
            correctAnswer : 'c'
        }

    
    ]


    // used for disabling the submit button    
    get allNotSelected() { 
        return !(Object.keys(this.selected).length === this.myQuestions.length) 
    }
     
    
    // for applying dynamic styling to our result
    get isScoredFull() {
        return `slds-text-heading_large ${this.myQuestions.length === this.correctAnswers.length ?
        'slds-text-color_success':'slds-text-color_error'
        }`
        
    }
        
    // change handler gets called on every click  
    changeHandler(event) {
        console.log("name", event.target.name);
        console.log("value", event.target.value);

        const { name, value } = event.target;
        //const name = event.target.name;
        //const value = event.target.value;
        this.selected = {...this.selected,[name]:value}
    }
     
    // for submit handler 
    submitHandler(event) {
        event.preventDefault();
        let correct = this.myQuestions.filter(item => this.selected[item.id] === item.correctAnswer)
        this.correctAnswers = correct.length
        console.log('Correct Answers', this.correctAnswers);
        this.isSubmitted = true;
    }
    
    //form reset handler                
    resetHandler(event) {
        this.selected = {}
        this.correctAnswers = 0
        this.isSubmitted = false
    }
}