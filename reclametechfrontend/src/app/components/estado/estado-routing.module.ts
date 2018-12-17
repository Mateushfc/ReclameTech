
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstadoDeleteComponent } from './delete/delete.component';
import { EstadoEditComponent } from './edit/edit.component';
import { EstadoListComponent } from './list/list.component';
import { EstadoRegisterComponent } from './register/register.component';

const routes: Routes = [
    {
        path: 'estado',
        children: [
            { path: 'delete:id', component: EstadoDeleteComponent }    ,
            { path: 'edit:id', component: EstadoEditComponent }        ,
            { path: 'list', component: EstadoListComponent }           ,
            { path: 'register', component: EstadoRegisterComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EstadoRoutingModule { }
