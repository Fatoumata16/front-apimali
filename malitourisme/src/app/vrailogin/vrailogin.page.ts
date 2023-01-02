import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { logi } from '../modeles/log';
// import { StockageeService } from '../servicies/stockagee.service';
// import { IonicModule } from '@ionic/angular';

import { Component, OnInit, ViewChild , Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { region } from '../modeles/log';
import { StockageeService } from '../servicies/stockagee.service';


@Component({
  selector: 'app-vrailogin',
  templateUrl: './vrailogin.page.html',
  styleUrls: ['./vrailogin.page.scss'],
})
export class VrailoginPage implements OnInit {
  // form!:FormGroup

  public username!:String;
  password!:String;
  f!: logi;
  data: any;
  d!: any;
  m!: boolean;
  h!:any
  
     
    


  constructor( private http:HttpClient, private build:FormBuilder,private tokenserv:StockageeService,private route:Router
    ) { }

  ngOnInit() {
    this.data=new FormData();
    // this.form=this.build.group({
    //   usernamef:["",Validators.required],
    // password:["",Validators.required],
      
    // });
  }
  onSubmit(){
   this.f= new logi(this.username,this.password);
   console.log(this.f.username),
   console.log(this.f.password),
   
     this.data.append("username",this.username);
     this.data.append("password",this.password);

    this.http.post('http://localhost:8080/login',this.data)
    .subscribe(datee=>{console.log(datee)
      this.h=this.username;
      this.d=datee;
    localStorage.setItem('username',this.h)
    // console.log(this.d)
    this.tokenserv.svetoken(this.d)
    this.m=this.tokenserv.islogged();
    if(this.m==true){
      this.route.navigate(['/accueil'])
    }
    else{
       console.log('erreur dans la navigation')
    }
   
    },
    err=>{
      this.m=this.tokenserv.islogged();
      if(this.m==true){
        // this.route.navigate(['/accueil'])
        console.log('erreur qui ne passe pas')
      }
      else{
        console.log('erreur trop grave')
      }
    }
    
    )
  
  }

  

}
