import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http:HttpClient) { }
  postAllies(data:any)
  {
    return this.http.post<any>("http://localhost:3000/posts",data).pipe(map((res:any)=>{
      return res;
    }))
  }
  getAllies()
  {
    return this.http.get<any>("http://localhost:3000/posts").pipe(map((res:any)=>{
      return res;
    }))
  }
  deleteAllies(id:number)
  {
    return this.http.delete<any>("http://localhost:3000/posts/"+id).pipe(map((res:any)=>{
      return res;
    }))
  }
  postslyAllies(data:any)
  {
    return this.http.post<any>("http://localhost:3000/sly_house",data).pipe(map((res:any)=>{
      return res;
    }))
  }
  getslyAllies()
  {
    return this.http.get<any>("http://localhost:3000/sly_house").pipe(map((res:any)=>{
      return res;
    }))
  }
  deleteslyAllies(id:number)
  {
    return this.http.delete<any>("http://localhost:3000/sly_house/"+id).pipe(map((res:any)=>{
      return res;
    }))
  }

  posthuffAllies(data:any)
  {
    return this.http.post<any>("http://localhost:3000/huff_house",data).pipe(map((res:any)=>{
      return res;
    }))
  }
  gethuffAllies()
  {
    return this.http.get<any>("http://localhost:3000/huff_house").pipe(map((res:any)=>{
      return res;
    }))
  }
  deletehuffAllies(id:number)
  {
    return this.http.delete<any>("http://localhost:3000/huff_house/"+id).pipe(map((res:any)=>{
      return res;
    }))
  }

  postravAllies(data:any)
  {
    return this.http.post<any>("http://localhost:3000/rav_house",data).pipe(map((res:any)=>{
      return res;
    }))
  }
  getravAllies()
  {
    return this.http.get<any>("http://localhost:3000/rav_house").pipe(map((res:any)=>{
      return res;
    }))
  }
  deleteravAllies(id:number)
  {
    return this.http.delete<any>("http://localhost:3000/rav_house/"+id).pipe(map((res:any)=>{
      return res;
    }))
  }
}
