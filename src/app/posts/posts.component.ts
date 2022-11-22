import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { PostService } from '../services/post.service';
import { ApiserviceService } from '../services/apiservice.service';

import { Post } from '../models/Post';
import { User } from '../models/User';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts$:Observable<Post[]>;
  userId?:Pick<User,"id">|number;


  form:FormGroup
  constructor(private postService:PostService,private apiService:ApiserviceService) { }

  ngOnInit(): void {
    this.posts$=this.fetchAll();
    this.userId=this.apiService.userId

  }
  fetchAll():Observable<Post[]>{
    return this.postService.fetchAll()
  }

  // createFormGroup():FormGroup{
  //   return new FormGroup({
  //     title:new FormControl('',[Validators.required,Validators.minLength(4)]),
  //     body:new FormControl('',[Validators.required,Validators.minLength(10)]),
       
  //    })
  // }
  createPost():void{
    this.posts$=this.fetchAll();
  }
  delete(postId:Pick<Post,"id">):void{
    this.postService.deletePost(postId).subscribe(()=>(this.posts$=this.fetchAll()));
  }

}
