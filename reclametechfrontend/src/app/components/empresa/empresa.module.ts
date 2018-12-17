import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpresaDeleteComponent } from './delete/delete.component';
import { EmpresaEditComponent } from './edit/edit.component';
import { EmpresaListComponent } from './list/list.component';
import { EmpresaRegisterComponent } from './register/register.component';
import { EmpresaRoutingModule } from './empresa-routing.module';
import { PerfilEmpresaComponent } from './perfil-empresa/perfil-empresa.component';


@NgModule({
    imports: [CommonModule, EmpresaRoutingModule, FormsModule, BrowserModule, ReactiveFormsModule],
    declarations: [
        EmpresaDeleteComponent,
        EmpresaEditComponent,
        EmpresaListComponent,
        EmpresaRegisterComponent,
        PerfilEmpresaComponent

    ]
})
export class EmpresaModule { }
