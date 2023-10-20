import { Component, OnInit } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-get-quote',
  templateUrl: './get-quote.component.html',
  styleUrls: ['./get-quote.component.scss']
})
export class GetQuoteComponent implements OnInit {
  quoteForm?: FormGroup;
  mathProblem: string;
  correctAnswer: number;
  feedbackMessage?: string;

  constructor(private fb: FormBuilder, private fs: Firestore) { }
  ngOnInit(): void {
    this.createForm();
    this.generateMathProblem();
  }

  createForm(): void {
    this.quoteForm = this.fb.group({
      fullName: ['', Validators.required],
      company: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required],
      answer: ['', Validators.required]
    });
  }

  generateMathProblem() {
    const num1 = Math.floor(Math.random() * 90) + 10;
    const num2 = Math.floor(Math.random() * 9) + 1;
    const operators = ['+', '-'];
    const operator = operators[Math.floor(Math.random() * operators.length)];

    this.mathProblem = `${num1} ${operator} ${num2}`;
    this.correctAnswer = operator === '+' ? num1 + num2 : num1 - num2;
  }

  onSubmit(isValid: boolean, formData: any): void {
    if (isValid) {
      if (formData.answer === this.correctAnswer) {
        const collectionRef = collection(this.fs, "ksoltution-GetQuote");
        addDoc(collectionRef, formData).then((docRef) => {
          console.log('Document written with ID: ', docRef.id);
          this.quoteForm.reset();
        })
          .catch((error) => {
            console.error('Error adding document: ', error);
          });;
      } else {
        this.quoteForm.get('answer').setValue('');
        this.feedbackMessage = 'Invalid answer, please try again.';
        this.generateMathProblem()
        setTimeout(() => {
          this.feedbackMessage = '';
        }, 3000);
      }
    } else {
      this.feedbackMessage = 'Please fill out the form correctly';
      setTimeout(() => {
        this.feedbackMessage = '';
      }, 3000);
    }
  }
}
