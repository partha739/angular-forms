import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../services/apiservice.service';
@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
readData:any
  constructor(private service:ApiserviceService) { }

  ngOnInit(): void {
  }}
   
//     this.service.getAllData().subscribe((res)=>{
//       console.log(res);
//       this.readData=res.data

//     })
//   }

//   deleteId(id:string){
//     // console.log(id,'deleteid==>');
//     this.service.deleteData(id).subscribe((res)=>{
//       console.log(res,'deleteres==>')
//     })

//   }

// }
