import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AreaEmpresaDeleteComponent } from './delete/delete.component';
import { AreaEmpresaEditComponent } from './edit/edit.component';
import { AreaEmpresaListComponent } from './list/list.component';
import { AreaEmpresaRegisterComponent } from './register/register.component';

const routes: Routes = [
    {
        path: 'area',
        children: [
            { path: 'delete:id', component: AreaEmpresaDeleteComponent },
            { path: 'edit:id', component: AreaEmpresaEditComponent },
            { path: 'list', component: AreaEmpresaListComponent },
            { path: 'register', component: AreaEmpresaRegisterComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AreaEmpresaRoutingModule { }
