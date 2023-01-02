import { Component, OnInit, ViewChild , Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { Commentaires, region } from '../modeles/log';
import { StockageeService } from '../servicies/stockagee.service';


@Component({
  selector: 'app-region',
  templateUrl: './region.page.html',
  styleUrls: ['./region.page.scss'],
})
export class RegionPage implements OnInit {
  id!:number;
   f=new region('','',0,'','',0);
   d:any[]=[];
   @Input() data: any;
   j:string='';
   s!:any;
   t!:any

  constructor( public routeur:ActivatedRoute,private stock:StockageeService) { }

  @ViewChild(IonModal)
  modal!: IonModal;

  message = 'Cliquez ici pour ajouter un nouveau commentaire';
  name!: string;

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
    new Commentaires(this.name)
    this.t=localStorage.getItem('username')
    console.log(new Commentaires(this.name))
   
    this.stock.ajoutcommentaire(this.f.nomn,this.t,new Commentaires(this.name)).subscribe(da=>console.log(da))
    
  }

  

  ngOnInit() {
    this.id=this.routeur.snapshot.params['id'],
    this.stock.trouverparid(this.id).subscribe
    (data=>{this.f=data
    // console.log(this.f)
    })
    this.stock.toutcommentaire(this.id).subscribe(data=>{this.d=data
    // console.log(this.d)
    })

  }
  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }
  ajout(k:string ,o:string){
   
  }

}
