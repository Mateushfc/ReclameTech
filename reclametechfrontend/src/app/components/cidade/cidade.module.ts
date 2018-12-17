import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CidadeDeleteComponent } from './delete/delete.component';
import { CidadeEditComponent } from './edit/edit.component';
import { CidadeListComponent } from './list/list.component';
import { CidadeRegisterComponent } from './register/register.component';
import { CidadeRoutingModule } from './cidade-routing.module';


@NgModule({
    imports: [CommonModule, CidadeRoutingModule, FormsModule, BrowserModule],
    declarations: [
        CidadeDeleteComponent               , 
        CidadeEditComponent                 , 
        CidadeListComponent                 , 
        CidadeRegisterComponent
    ],
    exports: [CidadeRegisterComponent]
})
export class CidadeModule {}
