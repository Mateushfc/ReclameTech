import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpresaDeleteComponent } from './delete/delete.component';
import { EmpresaEditComponent } from './edit/edit.component';
import { EmpresaListComponent } from './list/list.component';
import { EmpresaRegisterComponent } from './register/register.component';
import { PerfilEmpresaComponent } from './perfil-empresa/perfil-empresa.component';

const routes: Routes = [
    {
        path: 'empresa',
        children: [
            { path: 'delete:id', component: EmpresaDeleteComponent },
            { path: 'edit', component: EmpresaEditComponent },
            { path: 'list', component: EmpresaListComponent },
            { path: '', component: EmpresaListComponent },
            { path: 'register', component: EmpresaRegisterComponent },
            { path: 'perfilEmpresa/:Id_empresa', component: PerfilEmpresaComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EmpresaRoutingModule { }
