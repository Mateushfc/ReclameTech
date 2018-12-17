import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatusDeleteComponent } from './delete/delete.component';
import { StatusEditComponent } from './edit/edit.component';
import { StatusListComponent } from './list/list.component';
import { StatusRegisterComponent } from './register/register.component';
import { StatusRoutingModule } from './status-routing.module';


@NgModule({
    imports: [CommonModule, StatusRoutingModule],
    declarations: [
        StatusDeleteComponent              , 
        StatusEditComponent                , 
        StatusListComponent                , 
        StatusRegisterComponent
    ]
})
export class StatusModule {}
