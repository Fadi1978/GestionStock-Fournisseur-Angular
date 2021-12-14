import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fournisseur } from '../Models/Fournisseur';
import { FournisseurService } from '../service/fournisseur.service';


@Component({
  selector: 'app-update-fournisseur',
  templateUrl: './update-fournisseur.component.html',
  styleUrls: ['./update-fournisseur.component.css']
})
export class UpdateFournisseurComponent implements OnInit {

  title="FORM UPDATE";
@Input() id!:number;


  @Input() fournisseurr!:Fournisseur;
  @Output() addEvent=new EventEmitter();

  @Output() notif = new EventEmitter(); // from angular/ core 
  constructor(private ac:ActivatedRoute,private service:FournisseurService,private router:Router) { }

  fournisseur = new Fournisseur();
 // id=this.ac.snapshot.params.id;
  
  ngOnInit(): void {
    this.getFournisseur();
   /* this.service.consulterFournisseur(this.ac.snapshot.params.id).
 subscribe( four =>{ this.fournisseur = four; } ) ; */
  }
 

  getFournisseur()
  {
    this.service.fetchFournisseurById(this.id).subscribe(
      (res:Fournisseur)=>
      {
        this.fournisseur=res;
        console.log(res.idFournisseur)
      },
      (error)=>{
        console.log(error)
      }
    );
  }

  UpdateFournisseur(data:Fournisseur){
data.status=1;
    data.idFournisseur=this.id;
    data.image="assets/"+data.image.substr(12,data.image.length);

    this.service.UpdatFournisseur(data).subscribe((next)=>{

      this.notif.emit(this.router.navigate(['homes']));
    },
    
    (error)=>{console.log(error);alert("Problème lors de la modification !");})
   /* 
    this.service.UpdatFournisseur(this.fournisseur).subscribe(prod => {
      this.router.navigate(['homes']);
      },(error) => { alert("Problème lors de la modification !"); }
      )

*/


  }


  

}
