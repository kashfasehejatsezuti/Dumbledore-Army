import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/api.service';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { AllieshuffModel } from './hufflepuff.model';

@Component({
  selector: 'app-hufflepuff',
  templateUrl: './hufflepuff.component.html',
  styleUrls: ['./hufflepuff.component.css']
})
export class HufflepuffComponent implements OnInit {

  alert1:boolean=false;
  alert2:boolean=false;
  formValue!:FormGroup;
  alliesModelObj : AllieshuffModel = new AllieshuffModel();
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
 
     this.api.posthuffAllies(this.alliesModelObj).subscribe(res=>{
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
     let data= this.api.gethuffAllies()
     console.log(data);
     data.subscribe( res=>{
 
       
 
       this.alliesData =res;
 
     })
   }
     deleteAllAllies(ally:any)
     {
       this.api.deletehuffAllies(ally.id).subscribe(res=>{
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
