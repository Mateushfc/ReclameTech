import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsumidorDeleteComponent } from './delete/delete.component';
import { ConsumidorEditComponent } from './edit/edit.component';
import { ConsumidorListComponent } from './reclamacoesConsumidor/list.component';
import { ConsumidorRegisterComponent } from './register/register.component';
import { ConsumidorDetailsComponent } from './details/details.component';

const routes: Routes = [
    {
        path: 'consumidor',
        children: [
            { path: 'delete', component: ConsumidorDeleteComponent },
            { path: 'details', component: ConsumidorDetailsComponent },
            { path: 'edit', component: ConsumidorEditComponent },
            { path: 'reclamacoesConsumidor', component: ConsumidorListComponent },
            { path: 'register', component: ConsumidorRegisterComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ConsumidorRoutingModule { }
