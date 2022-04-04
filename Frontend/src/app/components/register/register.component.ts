import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registerForm!: FormGroup;
  public result: string = '';

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
    const payload = {
      value: this.registerForm.value.value.replace(',', '.'),
      instalments: this.registerForm.value.instalments,
    }

    this.registerService.post(payload).subscribe(
      (res) => {
        const response  = parseFloat(res).toFixed(2);
        this.result = `R$ ${response.replace('.', ',')}`;
      },
      (erro: any) => { console.error(erro) });
  }
}
