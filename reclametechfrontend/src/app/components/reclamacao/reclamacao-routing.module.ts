
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReclamacaoDeleteComponent } from './delete/delete.component';
import { ReclamacaoEditComponent } from './edit/edit.component';
import { ReclamacaoListComponent } from './list/list.component';
import { ReclamacaoRegisterComponent } from './register/register.component';
import { RepostaReclamacaoComponent } from './reposta-reclamacao/reposta-reclamacao.component';

const routes: Routes = [
    {
        path: 'reclamacao',
        children: [
            { path: 'delete', component: ReclamacaoDeleteComponent },
            { path: 'edit', component: ReclamacaoEditComponent },
            { path: 'list', component: ReclamacaoListComponent },
            { path: 'register/:Id_empresa', component: ReclamacaoRegisterComponent },
            { path: 'reposta/:Id_reclamacao', component: RepostaReclamacaoComponent },
            { path: 'register/:Id_empresa', component: ReclamacaoListComponent },

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReclamacaoRoutingModule { }
