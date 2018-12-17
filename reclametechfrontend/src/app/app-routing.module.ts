import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { ContatoComponent } from './components/contato/contato.component';
import { EscolhaTipoUsuarioComponent } from './login/escolha-tipo-usuario/escolha-tipo-usuario.component';
import { RecuperarSenhaComponent } from './login/recuperar-senha/recuperar-senha.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'prefix' },
    { path: "login", component: LoginComponent },
    // { path: 'login', loadChildren: './login/login.module#LoginModule' },
    { path: "tipoUsuario", component: EscolhaTipoUsuarioComponent },
    { path: "home", component: HomeComponent },
    { path: "contato", component: ContatoComponent },
    { path: "ranking", component: RankingComponent },
    { path: "recuperar-senha", component: RecuperarSenhaComponent }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
