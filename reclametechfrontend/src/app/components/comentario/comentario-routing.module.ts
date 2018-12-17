import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComentarioDeleteComponent } from './delete/delete.component';
import { ComentarioEditComponent } from './edit/edit.component';
import { ComentarioListComponent } from './list/list.component';
import { ComentarioRegisterComponent } from './register/register.component';

const routes: Routes = [
    {
        path: 'comentario',
        children: [
            { path: 'delete:id', component: ComentarioDeleteComponent }    ,
            { path: 'edit:id', component: ComentarioEditComponent }        ,
            { path: 'list', component: ComentarioListComponent }           ,
            { path: 'register', component: ComentarioRegisterComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ComentarioRoutingModule { }
