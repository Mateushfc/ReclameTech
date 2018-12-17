import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AreaEmpresaDeleteComponent } from './delete/delete.component';
import { AreaEmpresaEditComponent } from './edit/edit.component';
import { AreaEmpresaListComponent } from './list/list.component';
import { AreaEmpresaRegisterComponent } from './register/register.component';
import { AreaEmpresaRoutingModule } from './area-empresa-routing.module';


@NgModule({
    imports: [CommonModule, AreaEmpresaRoutingModule],
    declarations: [
        AreaEmpresaDeleteComponent,
        AreaEmpresaEditComponent,
        AreaEmpresaListComponent,
        AreaEmpresaRegisterComponent
    ]
})
export class AreaEmpresaModule { }
