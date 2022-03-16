import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { ApiService } from '../../shared/api.service';
import { AlliesModel } from './gryffindor.model';


@Component({
  selector: 'app-gryffindor',
  templateUrl: './gryffindor.component.html',
  styleUrls: ['./gryffindor.component.css']
})


export class GryffindorComponent implements OnInit {
  alert1:boolean=false;
  alert2:boolean=false;
  formValue!:FormGroup;
 alliesModelObj : AlliesModel = new AlliesModel();
 alliesData!:any;
  constructor( private formbuilder:FormBuilder, private api:ApiService) {}
  
  
  ngOnInit(): void {
    this.formValue =this.formbuilder.group({
      name:[],
      house_name:[],
      specialization:[],
    })
     this.getAllAllies();
    }
  postAlliesDetails() {
    this.alliesModelObj.name =this.formValue.value.name;
    this.alliesModelObj.house_name =this.formValue.value.house_name;
    this.alliesModelObj.specialization =this.formValue.value.specialization;

    this.api.postAllies(this.alliesModelObj).subscribe(res=>{
      console.log(res);
      this.alert1=true
      setTimeout(()=>{
        this.alert1 = false;
   }, 2000);
   
      let ref =document.getElementById('cancle')
      ref?.click();
      this.formValue.reset();
      this.getAllAllies();
    },
    
    err=>{
      alert("Something went Wrong");
      
    })
  }
  CloseAlert1()
    { 
      this.alert1=false;
    }

  getAllAllies()
  {
    let data= this.api.getAllies()
    console.log(data);
    data.subscribe( res=>{

      

      this.alliesData =res;

    })
  }
    deleteAllAllies(ally:any)
    {
      this.api.deleteAllies(ally.id).subscribe(res=>{
        this.alert2=true
        setTimeout(()=>{
          this.alert2 = false;
     }, 2000);
        this.getAllAllies();
      })
    }
    CloseAlert2()
    { 
      this.alert2=false;
    } 
  }

