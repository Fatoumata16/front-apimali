import { Component, OnInit } from '@angular/core';
import { StockageeService } from '../servicies/stockagee.service';

@Component({
  selector: 'app-ajoutregion',
  templateUrl: './ajoutregion.page.html',
  styleUrls: ['./ajoutregion.page.scss'],
})
export class AjoutregionPage implements OnInit {

  constructor(private serv:StockageeService) { }
  nom!:string;
  domaine!:string
  supercifie!:number
  langue!:string
  image!:any
  data!:any;
  ngOnInit() {
    this.data=new FormData();
  }
  ajouter(){
    this.data.append('file',this.image);
    this.serv.ajoutregion(this.nom,this.domaine,this.supercifie,this.langue,this.data).subscribe(dat=>console.log(dat))
  }

}
