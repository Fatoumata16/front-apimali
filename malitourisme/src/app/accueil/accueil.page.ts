import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { region } from '../modeles/log';
import { StockageeService } from '../servicies/stockagee.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {
  slideOpts = {
    
    speed: 400,
    initialSlide: 0,
 slidesPerView: 1,
 autoplay:true

  };
  f!: Observable<region[]>;

  constructor( private http:HttpClient, private tokenserv:StockageeService,private route:Router,private navc:NavController) {  }

  ngOnInit() {
   this.f= this.tokenserv.toutregion()
   
  }
  // partirregion(id:number){
  //   this.navc.navigateForward("/region/",id)

  // }

}
