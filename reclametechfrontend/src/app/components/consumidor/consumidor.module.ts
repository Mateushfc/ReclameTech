import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsumidorDeleteComponent } from './delete/delete.component';
import { ConsumidorEditComponent } from './edit/edit.component';
import { ConsumidorListComponent } from './reclamacoesConsumidor/list.component';
import { ConsumidorRegisterComponent } from './register/register.component';
import { ConsumidorRoutingModule } from './consumidor-routing.module';
import { ConsumidorDetailsComponent } from './details/details.component';


@NgModule({
    imports: [
        CommonModule,
        ConsumidorRoutingModule,
        FormsModule,
        BrowserModule,
        ReactiveFormsModule
    ],
    declarations: [
        ConsumidorDeleteComponent,
        ConsumidorEditComponent,
        ConsumidorListComponent,
        ConsumidorRegisterComponent,
        ConsumidorDetailsComponent
    ]
})
export class ConsumidorModule { }
