import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiserviceService } from '../services/apiservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup
  constructor(private apiService:ApiserviceService) { }

  ngOnInit(): void {
    this.loginForm=this.createFormGroup();

  }


  createFormGroup():FormGroup{
    return new FormGroup({
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required,Validators.minLength(4)]),
       
     })
  }

login(): void{
 this.apiService.login(this.loginForm.value.email,this.loginForm.value.password).subscribe();
  
}






}
