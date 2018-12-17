import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComentarioDeleteComponent } from './delete/delete.component';
import { ComentarioEditComponent } from './edit/edit.component';
import { ComentarioListComponent } from './list/list.component';
import { ComentarioRegisterComponent } from './register/register.component';
import { ComentarioRoutingModule } from './comentario-routing.module';


@NgModule({
    imports: [CommonModule, ComentarioRoutingModule],
    declarations: [
        ComentarioDeleteComponent           , 
        ComentarioEditComponent             , 
        ComentarioListComponent             , 
        ComentarioRegisterComponent
    ]
})
export class ComentarioModule {}
