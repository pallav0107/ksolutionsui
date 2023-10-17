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

  constructor( private fb: FormBuilder, private fs: Firestore ) { }
  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.quoteForm = this.fb.group({
      fullName: ['', Validators.required],
      company: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit(isValid: boolean, formData: any): void {
    if (isValid) {
      const collectionRef = collection(this.fs, "ksoltution-FreeQuote");
      addDoc(collectionRef, formData).then((docRef) => {
        console.log('Document written with ID: ', docRef.id);
        this.quoteForm.reset();
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });;
    }
  }

}
