import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReclamacaoDeleteComponent } from './delete/delete.component';
import { ReclamacaoEditComponent } from './edit/edit.component';
import { ReclamacaoListComponent } from './list/list.component';
import { ReclamacaoRegisterComponent } from './register/register.component';
import { ReclamacaoRoutingModule } from './reclamacao-routing.module';
import { RepostaReclamacaoComponent } from './reposta-reclamacao/reposta-reclamacao.component';
import { LoginModule } from 'src/app/login/login.module';


@NgModule({
    imports: [
        CommonModule,
        ReclamacaoRoutingModule,
        FormsModule,
        BrowserModule,
        LoginModule,
        ReactiveFormsModule
    ],
    declarations: [
        ReclamacaoDeleteComponent,
        ReclamacaoEditComponent,
        ReclamacaoListComponent,
        ReclamacaoRegisterComponent,
        RepostaReclamacaoComponent
    ]
})
export class ReclamacaoModule { }
