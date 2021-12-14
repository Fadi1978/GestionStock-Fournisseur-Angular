import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fournisseur } from '../Models/Fournisseur';
import { FournisseurService } from '../service/fournisseur.service';


@Component({
  selector: 'app-delete-fournisseur',
  templateUrl: './delete-fournisseur.component.html',
  styleUrls: ['./delete-fournisseur.component.css']
})
export class DeleteFournisseurComponent implements OnInit {
  fournisseur!:Fournisseur[];

  constructor(private service:FournisseurService,private router:Router) { }

  ngOnInit(): void {
    this.service.fetchFournisseur().subscribe(
      (t)=>{
        this.fournisseur=t;
      },
      (error)=>{
        console.log(error.status)
      }
    );
  }
  Delete(id:number)
    {
      console.log("id : "+id);
     // this.service.deleteFournisseur(id);
    /*  this.service.deleteFournisseur(id).subscribe(
        (next)=>{this.router.navigateByUrl("home");}
      
      ,(error)=>{console.log(error);}) */
    // this.router.navigateByUrl("home");
    
    this.service.deleteFournisseur(id).subscribe({
      next: data => {
        console.log(data+"delete bien")
        this.router.navigateByUrl("homes")
      },
      error:error=>{
        console.error('there was an error!',error);
      }
    });
   
  }
    


}
