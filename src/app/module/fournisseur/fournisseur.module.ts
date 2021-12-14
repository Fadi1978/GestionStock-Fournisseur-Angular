import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FournisseurRoutingModule } from './fournisseur-routing.module';
import { AddFournisseurComponent } from './add-fournisseur/add-fournisseur.component';
import { DeleteFournisseurComponent } from './delete-fournisseur/delete-fournisseur.component';
import { GetFournisseurComponent } from './get-fournisseur/get-fournisseur.component';
import { UpdateFournisseurComponent } from './update-fournisseur/update-fournisseur.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MaterialModule } from 'src/app/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SearchFilterPipe } from './service/search-filter.pipe';
import { popperVariation, TippyModule, tooltipVariation, withContextMenuVariation } from "@ngneat/helipopper";
import { ConfirmComponent } from './confirm/confirm.component';


@NgModule({
  declarations: [AddFournisseurComponent,
    DeleteFournisseurComponent,
    GetFournisseurComponent,
    UpdateFournisseurComponent,
    SearchFilterPipe,
    ConfirmComponent,

  ],

  imports: [
    CommonModule,
    FournisseurRoutingModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,FormsModule,
    HttpClientModule,
    MatDialogModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MaterialModule,
    BrowserAnimationsModule,
    NgbModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    TippyModule.forRoot({
      defaultVariation: "tooltip",
      variations: {
        tooltip: tooltipVariation,
        popper: popperVariation,
        menu: {
          ...popperVariation,
          appendTo: "parent",
          arrow: false,
          offset: [0, 0]
        },
        contextMenu: withContextMenuVariation(popperVariation),
        popperBorder: {
          ...popperVariation,
          theme: "light-border"
        }
      }
    })

    

  ]
})
export class FournisseurModule { }
