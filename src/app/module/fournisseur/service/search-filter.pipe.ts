import { Pipe, PipeTransform } from '@angular/core';
import { Fournisseur } from '../Models/Fournisseur';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  
  transform(ListFournisseur :Fournisseur[], searchValue:string): Fournisseur[] {
if(!ListFournisseur || !searchValue)
{
  return ListFournisseur;
}
return ListFournisseur.filter(fournisseur=> 
  fournisseur.codeFournisseur.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) || 
  fournisseur.libelleFournisseur.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
  fournisseur.idFournisseur.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())||
  fournisseur.telephone.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) || 

  fournisseur.adresse.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) || 
  fournisseur.email.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) 

  
  );
}
}
