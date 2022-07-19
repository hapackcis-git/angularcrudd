import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  cform!: FormGroup;
  
  
  constructor(private formbuilder:FormBuilder,private http: HttpClient) { }

  ngOnInit(): void {
    this.cform = this.formbuilder.group({

      fname: [''],
      lname: [''],
      email: [''],
      mobile: [''],


    });
  }
  contactForm() {
    this.http.post<any>("http://localhost:3000/profile", this.cform.value).subscribe(res => {
      alert('contact saved');
    })

  }



}
