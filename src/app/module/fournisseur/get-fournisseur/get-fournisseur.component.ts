import { Component, Input, OnInit, PipeTransform } from '@angular/core';
import { Router } from '@angular/router';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { HttpClient } from '@angular/common/http';
import {MatTableDataSource} from '@angular/material/table';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Fournisseur } from '../Models/Fournisseur';
import { FournisseurService } from '../service/fournisseur.service';
import { MatDialog } from "@angular/material/dialog";
import { AddFournisseurComponent } from '../add-fournisseur/add-fournisseur.component';

registerLocaleData(localeFr, 'fr');
@Component({
  selector: 'app-get-fournisseur',
  templateUrl: './get-fournisseur.component.html',
  styleUrls: ['./get-fournisseur.component.css']
})
export class GetFournisseurComponent implements OnInit {
  showFormTemplate!: boolean;
  buttonValue!: string;
  inputFournisseur!: Fournisseur // the parent component will send this input to the child (formProduct)
  fo !: Fournisseur;
  constructor(private service:FournisseurService,private router:Router,private modalService: NgbModal,private dialog: MatDialog) { }
  ListFournisseur !: Fournisseur[];
  ListFournisseurDel !: Fournisseur[];

  dataSource = new MatTableDataSource( this.ListFournisseur);
  search!:string;
  searchValue!:string;
  p:number=1;
  ngOnInit(): void {
    this.GetAllFournisseur();
    this.buttonValue="ADD NEW FOURNISSEUR";
  }

 

  GetAllFournisseur()
  {console.log("getallFournisseur");
    this.service.fetchFournisseur().subscribe(
      (t)=>{

        console.log(t);
        this.ListFournisseur=t;
       
      },
      (error)=>{
        console.log(error.status)
      }
    );
  }



  GetAllFournisseur1()
  {console.log("getallFournisseur");
    this.service.fetchFournisseurDel().subscribe(
      (t)=>{

        console.log(t);
        this.ListFournisseurDel=t;
        console.log(this.ListFournisseurDel);
       
      },
      (error)=>{
        console.log(error.status)
      }
    );
  }













  Delete(fournisseur:Fournisseur)
  {

    let i = this.ListFournisseur.indexOf(fournisseur);
  fournisseur.status=0;
  this.service.UpdatFournisseur(fournisseur).subscribe(data => {
    this.GetAllFournisseur();

    //this.ListFournisseur.splice(i, 1)

    });
/*
    this.service.deleteFournisseur(id).subscribe(()=>{},(error)=>{console.log(error)});
    console.log("----------------------------")
    this.GetAllFournisseur();
    */
  }
 
  UpdateFournisseur(id:number)
  {
    this.router.navigate(['update',id])
  }
  // ***************************** Pop Up ***************************************************************
  onCreate(){
   
    this.dialog.open(AddFournisseurComponent);

}


  closeResult = '';

  openn(content:any,Fou:Fournisseur) {
    this.service.fetchFournisseurById(Fou.idFournisseur).subscribe(
      (res:Fournisseur)=>
      {
        this.fo=res;
        console.log(res.idFournisseur)
      },
      (error)=>{
        console.log(error)
      }
    );    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }

  }


  // ***********************************************************************************************

  

  SaveFournisseur(fournisseur: Fournisseur): void{
    
      //add a new product
    //  fournisseur.nbrLike=0;
   /*  this.showFormTemplate = false
      this.service.addFournisseur(fournisseur).subscribe(
        ()=>this.ListFournisseur.push(fournisseur)
      )*/
      console.log(fournisseur);
      console.log(fournisseur);
      console.log(fournisseur);
      console.log(fournisseur);
      console.log(fournisseur);
      console.log(fournisseur);
      console.log(fournisseur);
      console.log(fournisseur);
      console.log(fournisseur);
      console.log(fournisseur);
      console.log(fournisseur);
      console.log(fournisseur);

      this.service.addFournisseur(fournisseur).subscribe({
        next: data => {
          console.log(data+"Succes ADD")
          this.router.navigateByUrl("homes")
        },
        error:error=>{
          console.error('there was an error!',error);
        }
      });
      
  }

  showForm(){
    if (this.showFormTemplate ===false){
      this.showFormTemplate = true
      this.buttonValue= "GO BACK TO THE LIST";
      this.inputFournisseur = new Fournisseur();
    }
    else {
      this.buttonValue="ADD NEW FOURNISSEUR";
      this.showFormTemplate = false
    }
  }
/*
value1=""

  applyFilter(event: any){
    console.log(this.ListFournisseur);
    this.value1 = (event.target as HTMLInputElement).value;
    console.log(this.value1);
    this.dataSource.filter= this.value1.trim().toLowerCase();
  }
  */
 i!:number;
 j!:number;
 ListFournisseur1 !: Fournisseur[];
 ListFournisseur2 !: Fournisseur[];

  recherche(){

    this.i=this.search.length;
    this.j=0;
if(this.search!="" ){
 /* this.ListFournisseur=this.ListFournisseur.filter(res=>{res.codeFournisseur.toLowerCase().match(this.search.toLowerCase())});
console.log(this.ListFournisseur);
*/
this.ListFournisseur2=this.ListFournisseur;
while(this.i!=this.j)
{ this.ListFournisseur1=this.ListFournisseur2;
  this.j=this.i;
  this.i=this.search.length;

this.ListFournisseur = this.ListFournisseur1?.filter(res => {
  return res.codeFournisseur.toLowerCase().match(this.search!.toLocaleString().toLowerCase())
});
}
}
else if (this.search==""){
this.ngOnInit();
}

  }



  ggf(e: any) {
    this.service.fetchFournisseur().subscribe(four => {
      console.log(four);
      this.ListFournisseur = four;
    });
  }

open2(content: any) {
    this.modalService.open(content, { size: 'xl' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  

  Activer(fournisseur:Fournisseur)
  {

    let i = this.ListFournisseur.indexOf(fournisseur);
  fournisseur.status=1;
  this.service.UpdatFournisseur(fournisseur).subscribe(data => {
    this.GetAllFournisseur();
this.reloadPage();
    //this.ListFournisseur.splice(i, 1)

    });
  }

  reloadPage() {   
    let currentUrl = this.router.url;       
     this.router.routeReuseStrategy.shouldReuseRoute = () => false;     
        this.router.onSameUrlNavigation = 'reload';     
           this.router.navigate([currentUrl]);    }

}
