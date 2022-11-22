import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiserviceService } from '../services/apiservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private apiService:ApiserviceService,private router:Router) { }
  signupForm:FormGroup
  ngOnInit(): void {
    this.signupForm=this.createFormGroup();
  }

createFormGroup():FormGroup{
return new FormGroup({
  name:new FormControl('',[Validators.required,Validators.minLength(3)]),
  email:new FormControl('',[Validators.required,Validators.email]),
  password:new FormControl('',[Validators.required,Validators.minLength(4)]),
   
 })
}
 signup(){
this.apiService.signup(this.signupForm.value).subscribe((msg)=>{
 this.router.navigate(['login'])

}
 )}
}