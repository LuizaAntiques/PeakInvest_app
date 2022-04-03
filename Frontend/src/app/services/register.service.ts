import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Register } from '../models/register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  baseUrl = environment.baseUrl + '/cadastro';
constructor(private http: HttpClient) {}

post(values: Register) {
  return this.http.post(this.baseUrl, values);
}

}
