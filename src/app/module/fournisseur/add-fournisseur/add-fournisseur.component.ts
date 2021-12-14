import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { GetFournisseurComponent } from '../get-fournisseur/get-fournisseur.component';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Fournisseur } from '../Models/Fournisseur';
import { FournisseurService } from '../service/fournisseur.service';
import { HttpResponse, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-add-fournisseur',
  templateUrl: './add-fournisseur.component.html',
  styleUrls: ['./add-fournisseur.component.css']
})
export class AddFournisseurComponent implements OnInit {

 // @Input() fournisseurr!:Fournisseur;
 @Output() addEvent=new EventEmitter<Fournisseur>();
  
@ViewChild(GetFournisseurComponent) c!:GetFournisseurComponent;
  fournisseur!:Fournisseur[];
  //FournisseurForm !:FormGroup;
  userFile !:any;
  public imagePath:any;
  imgURL!: any;
  url!:string;
  public message: any;
  FournisseurForm = new FormGroup(
		{
			codeFournisseur : new FormControl('', Validators.required),
			libelleFournisseur : new FormControl('', Validators.required),
      email : new FormControl('', [ Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
			telephone : new FormControl('', [Validators.required, Validators.min(10000000)]),
			adresse : new FormControl('', Validators.required),
      image: new FormControl(''),

      active : new FormControl('')


		} 
		) 
  constructor(public service:FournisseurService,private router:Router,private modalService: NgbModal,public fb: FormBuilder) { }


  ngOnInit(): void {
    if (this.service.choixmenu == "A")
    {this.infoForm()};
    this.service.fetchFournisseur().subscribe(
      (t)=>{
        this.fournisseur=t;
        this.router.navigateByUrl("homes");

      },
      (error)=>{
        console.log(error.status)
      }
    );
  }
  get codeFournisseur() { return this.FournisseurForm.get('codeFournisseur'); }
  get libelleFournisseur() { return this.FournisseurForm.get('libelleFournisseur'); }
  get email() { return this.FournisseurForm.get('email'); }
  get telephone() { return this.FournisseurForm.get('telephone'); }
  get adresse() { return this.FournisseurForm.get('adresse'); }
  get image() { return this.FournisseurForm.get('image'); }

  infoForm() {
    this.service.dataForm = this.fb.group({
        id: null,
        codeFournisseur: ['', [Validators.required]],
        libelleFournisseur: ['', [Validators.required]],
        active: ['', [Validators.required]],
       
    
        });
    }
  GetMaxId(t:Fournisseur[])
  {
    let Max= 0; 
    let i = 0; 
    let n = t.length ;
    
    while(i<n)
    { 
      if(t[i].idFournisseur > Max)
      { 
          Max = t[i].idFournisseur;
      }
      else
      {i++;}
    }
    console.log("Max : "+Max);
    return Max+Number(1);
  }

  SaveFournisseur(data:Fournisseur)
  {     console.log(this.fournisseur);
    console.log(this.fournisseur);
    console.log(this.fournisseur);


    data.idFournisseur=this.GetMaxId(this.fournisseur);
    console.log(data.idFournisseur);
  data.image="assets/"+data.image.substr(12,data.image.length);
    this.url=this.imgURL;
   // data.image=this.url;
   console.log(this.userFile+"********************");

    this.service.addFournisseur(data).subscribe({
      next: data => {
        console.log(data+"Succes ADD")
       // window.location.reload();
    this.reloadPage();      },
      error:error=>{
        console.error('there was an error!',error);
      }
    });
 
/*
    this.addEvent.emit(this.fournisseurr);
    console.log(this.fournisseur);
    this.fournisseurr = new Fournisseur();
    console.log(this.fournisseurr);
    */
  }
  reloadPage() {   
     let currentUrl = this.router.url;       
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;     
         this.router.onSameUrlNavigation = 'reload';     
            this.router.navigate([currentUrl]);    }


  closeResult = '';


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


  onSelectFile(event:any) {
    if (event.target.files.length > 0)
    {
      const file = event.target.files[0];
      this.userFile = file;
     // this.f['profile'].setValue(file);
 
    var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    
    this.imagePath = file;
    reader.readAsDataURL(file); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
  }
     
      
    }






}
