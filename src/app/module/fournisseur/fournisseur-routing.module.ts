import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { NotFoundPageComponent } from 'src/app/not-found-page/not-found-page.component';
import { AddFournisseurComponent } from './add-fournisseur/add-fournisseur.component';
import { GetFournisseurComponent } from './get-fournisseur/get-fournisseur.component';
import { UpdateFournisseurComponent } from './update-fournisseur/update-fournisseur.component';

const routes: Routes = [
  {path:'homes',component:GetFournisseurComponent},
 {path:'add',component:AddFournisseurComponent},
  //{path:'addModal',component:ModalAddComponent},

  {path:'update/:id',component:UpdateFournisseurComponent},
  //{path:'**',component:NotFoundPageComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FournisseurRoutingModule { }
