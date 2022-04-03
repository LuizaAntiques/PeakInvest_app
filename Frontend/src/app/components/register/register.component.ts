import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registerForm!: FormGroup;
  public result!: number;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.registerForm = this.fb.group({
      value: ['', Validators.required],
      instalments: ['', Validators.required],
    });
  }

  getForm() {
    console.log(this.registerForm.value);
    
    return this.result;
  }

}
