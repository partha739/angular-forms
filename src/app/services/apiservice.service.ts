import { Injectable } from '@angular/core';
import { Router, UrlSerializer } from '@angular/router';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { first,catchError,tap} from 'rxjs/operators';
import { User } from '../models/User';
import { ErrorHandlerService } from './error-handler.service';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  private Url="http://localhost:3000/auth"

  isUserLoggedIn$=new BehaviorSubject<boolean>(false)
  userId:Pick<User,"id">
  httpOptions:{headers:HttpHeaders}={
    headers:new HttpHeaders({"Content-Type":"application/json"}),

  };

  constructor(private http:HttpClient,private errorHandlerService:ErrorHandlerService,private router:Router) { }
 
signup(user:Omit<User,"id">):Observable<User>{
  return this.http.post<User>(this.Url+"/"+"signup",user,this.httpOptions).pipe(
    first(),
    catchError(this.errorHandlerService.handleError<User>("signup"))
    
  )

} 

login(email:Pick<User,"email">,password:Pick<User,"password">):Observable<{
  token:string; userId:Pick<User,"id">
}>
  {


  return this.http
  .post(
    this.Url+"/"+"login",{email,password},this.httpOptions)
  .pipe(
    first(),
    tap((tokenObject:{ token: string; userId:Pick<User,"id">}) => {
      this.userId=tokenObject.userId;
      localStorage.setItem("token",tokenObject.token);
      this.isUserLoggedIn$.next(true);
      this.router.navigate(["posts"])
    }),
    catchError(this.errorHandlerService
      .handleError<{token:string;userId:Pick<User,"id">}>("login"))
    
  );

} 



}







// apiUrl="http://localhost:3000/user";
// getAllData():Observable<any>{
// return this._http.get(this.apiUrl);
// }

// createData(data:any):Observable<any>{
//   console.log(data)
//   return this._http.post(this.apiUrl,data)
// }


// deleteData(id:any):Observable<number>{
  
//   return this._http.delete<number>(this.apiUrl+"/"+id)
// }
// updateData(data:any,id:any):Observable<any>{
//   return this._http.put(this.apiUrl+"/"+id,data);
// }
// getSingleData(id:any):Observable<any>{
//   return this._http.get(this.apiUrl+"/"+id);
// }
// }
