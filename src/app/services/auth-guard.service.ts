import { Injectable } from '@angular/core';
import { CanActivate,Router  } from '@angular/router';

import{Observable} from "rxjs";
import { ApiserviceService } from './apiservice.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private apiService:ApiserviceService,private router:Router) { }

  canActivate():Observable<boolean> {
    if(!this.apiService.isUserLoggedIn$.value){
      this.router.navigate(['signup'])
    }
    return this.apiService.isUserLoggedIn$;
    
  }
}
