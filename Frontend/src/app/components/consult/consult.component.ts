import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConsultService } from 'src/app/services/consult.service';

@Component({
  selector: 'app-consult',
  templateUrl: './consult.component.html',
  styleUrls: ['./consult.component.css']
})
export class ConsultComponent implements OnInit {
  public consultForm!: FormGroup;
  public name = {
    key: 0,
    value: '',
  };

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
    var response;
    this.consultService.get(id).subscribe( res => response = res.value, err => console.log(err.message));
//    console.log(this.consultForm.value.userId);
//    console.log(typeof id);
//    console.log(this.consultService.getById(id).subscribe(
//      (res) => { this.name = res },
//      (erro: any) => { console.error(erro) }));
    console.log(response);
   }

}
