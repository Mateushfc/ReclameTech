
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StatusDeleteComponent } from './delete/delete.component';
import { StatusEditComponent } from './edit/edit.component';
import { StatusListComponent } from './list/list.component';
import { StatusRegisterComponent } from './register/register.component';

const routes: Routes = [
    {
        path: 'status',
        children: [
            { path: 'delete:id', component: StatusDeleteComponent }    ,
            { path: 'edit:id', component: StatusEditComponent }        ,
            { path: 'list', component: StatusListComponent }           ,
            { path: 'register', component: StatusRegisterComponent }
        ]
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StatusRoutingModule { }
