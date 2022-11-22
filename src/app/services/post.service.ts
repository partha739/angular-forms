import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/User';
import { Post } from '../models/Post';
import { ErrorHandlerService } from './error-handler.service';
import { Observable } from 'rxjs';
import { catchError, first } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  private Url="http://localhost:3000/post"

  httpOptions:{headers:HttpHeaders}={
    headers:new HttpHeaders({"Content-Type":"application/json"}),

  };


  constructor(private http:HttpClient,private errorHandlerService:ErrorHandlerService) { }

  fetchAll():Observable<Post[]>{
    return this.http.get<Post[]>(this.Url,{ responseType:"json"}).pipe(
      catchError(this.errorHandlerService.handleError<Post[]>("fetchAll",[]))
      
    )
  
  } 
  createPost(formData:Partial<Post>,userId:Pick<User,"id">):Observable<Post>{
    return this.http.post<Post>(this.Url,{ title: formData.title,body:formData.body,user:userId},this.httpOptions).pipe(
      catchError(this.errorHandlerService.handleError<Post>("createPost"))
      
    )
  }
  deletePost(postId:Pick<Post,"id">):Observable<any>{
    return this.http.delete<Post>((this.Url+"/"+postId),this.httpOptions).pipe(
      first(),
      catchError(this.errorHandlerService.handleError<Post>("deletePost"))
    );

    }
  }



