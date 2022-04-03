import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registerForm!: FormGroup;
  public result?: any;

  constructor(private fb: FormBuilder,
              private registerService: RegisterService) {
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
    this.registerService.post(this.registerForm.value).subscribe(
      (res) => { this.result = res },
      (erro: any) => { console.error(erro) });

      return console.log(this.result);
      
  }

}
