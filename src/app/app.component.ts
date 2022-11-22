import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { ApiserviceService } from './services/apiservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
 export class AppComponent implements OnInit{
  isAuthenticated=false;
  title="Shopify"

  constructor(private apiService:ApiserviceService,private router:Router){}

  ngOnInit(): void {
    this.apiService.isUserLoggedIn$.subscribe((isLoggedIn)=>{
      this.isAuthenticated=isLoggedIn;
    });
    
  }

  show(){
    
  }
  logout():void{
    localStorage.removeItem("token");
    this.apiService.isUserLoggedIn$.next(false);
    this.router.navigate(['login'])
  }
 }


