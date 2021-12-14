import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

import { environment } from 'src/environments/environment';
import { Fournisseur } from '../Models/Fournisseur';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};


@Injectable({
  providedIn: 'root'
})
export class FournisseurService {

  
  public dataForm!: FormGroup; 
  choixmenu : string  = 'A';

  constructor(private http:HttpClient,private router:Router) 
  { }
  baseurl=environment.url;

  fournisseurUrl:string="/api/";


  fetchFournisseur():Observable<Fournisseur[]>
  {
    return this.http.get<Fournisseur[]>(this.baseurl+"retrieve-all-fournisseurs");
  }

  fetchFournisseurDel():Observable<Fournisseur[]>
  {
    return this.http.get<Fournisseur[]>(this.baseurl+"retrieve-all-fournisseurs-Del");
  }

  fetchFournisseurById(id:any):Observable<Fournisseur>
  {
    return this.http.get<Fournisseur>(this.baseurl+"retrieve-fournisseur/"+id);
  }
 
  addFournisseur(data:Fournisseur)
  {
    return this.http.post(this.baseurl+"add-fournisseur/",data);
  }

  
  deleteFournisseur(id:any){
    console.log(id);
   
    return this.http.delete(this.baseurl+"remove-fournisseur/"+id);
  }
  UpdatFournisseur(data:Fournisseur):Observable<Fournisseur>
  {
    console.log(data.idFournisseur);
    console.log(data.codeFournisseur);
    console.log(data.libelleFournisseur);
    console.log(data.active);

     return this.http.put<Fournisseur>(this.baseurl+"modify-fournisseur/",data);
    //return this.http.put<Fournisseur>(this.fournisseurUrl, data, httpOptions);

  }


/* ************************************************************** */
/*
consulterFournisseur(id: number): Observable<Fournisseur> {
  const url = `${this.fournisseurUrl}/${id}`;
  return this.http.get<Fournisseur>(url);
  }
  
*/



  }
