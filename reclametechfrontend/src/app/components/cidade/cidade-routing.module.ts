import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CidadeDeleteComponent } from './delete/delete.component';
import { CidadeEditComponent } from './edit/edit.component';
import { CidadeListComponent } from './list/list.component';
import { CidadeRegisterComponent } from './register/register.component';

const routes: Routes = [
    {
        path: 'cidade',
        children: [
            { path: 'delete:id', component: CidadeDeleteComponent }    ,
            { path: 'edit:id', component: CidadeEditComponent }        ,
            { path: '', component: CidadeListComponent }           ,
            { path: 'register', component: CidadeRegisterComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CidadeRoutingModule { }
