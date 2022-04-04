import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConsultService } from '../../services/consult.service';

@Component({
  selector: 'app-consult',
  templateUrl: './consult.component.html',
  styleUrls: ['./consult.component.css']
})
export class ConsultComponent implements OnInit {
  public consultForm!: FormGroup;
  public name: string = '';

  constructor(private fb: FormBuilder,
              private consultService: ConsultService) {
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
    var id = this.consultForm.value.userId;
    this.consultService.get(id)
    .subscribe( res => this.name = res.value, err => console.log(err.message));
    console.log(this.name);
   }

}
