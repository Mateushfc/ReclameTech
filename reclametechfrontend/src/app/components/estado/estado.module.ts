import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstadoDeleteComponent } from './delete/delete.component';
import { EstadoEditComponent } from './edit/edit.component';
import { EstadoListComponent } from './list/list.component';
import { EstadoRegisterComponent } from './register/register.component';
import { EstadoRoutingModule } from './estado-routing.module';


@NgModule({
    imports: [CommonModule, EstadoRoutingModule],
    declarations: [
        EstadoDeleteComponent,
        EstadoEditComponent,
        EstadoListComponent,
        EstadoRegisterComponent,
    ]
})
export class EstadoModule { }
