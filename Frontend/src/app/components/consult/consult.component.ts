import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-consult',
  templateUrl: './consult.component.html',
  styleUrls: ['./consult.component.css']
})
export class ConsultComponent implements OnInit {
  public consultForm!: FormGroup;
  public name: string| undefined;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.consultForm = this.fb.group({
      userId: ['', Validators.required],
    })
  }

  getUser() {
    console.log(this.consultForm.value);
  }

}
