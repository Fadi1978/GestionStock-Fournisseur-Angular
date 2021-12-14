import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

const routes: Routes = [
 // {path:'',redirectTo:'home',pathMatch:'full'},
 // {path:'home',component:GetFournisseurComponent},
 // {path:'add',component:AddFournisseurComponent},
//  {path:'addModal',component:ModalAddComponent},

//  {path:'update/:id',component:UpdateFournisseurComponent},
{
  path: 'home',
  loadChildren: () =>
    import('./module/fournisseur/fournisseur.module').then((m) => m.FournisseurModule),
},
 // {path:'**',component:NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
