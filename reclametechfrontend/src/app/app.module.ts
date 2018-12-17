import { LoginService } from './services/login.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './services/http.service';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AreaEmpresaModule } from './components/area-empresa/area-empresa.module';
import { CidadeModule } from './components/cidade/cidade.module';
import { ComentarioModule } from './components/comentario/comentario.module';
import { EmpresaModule } from './components/empresa/empresa.module';
import { EstadoModule } from './components/estado/estado.module';
import { ReclamacaoModule } from './components/reclamacao/reclamacao.module';
import { StatusModule } from './components/status/status.module';
import { ConsumidorModule } from './components/consumidor/consumidor.module';
import { CidadeService } from './services/cidade.service';
import { EstadoService } from './services/estado.service';
import { AreaEmpresaService } from './services/area-empresa.service';
import { EmpresaService } from './services/empresa.service';
import { ComentarioService } from './services/comentario.service';
import { ConsumidorService } from './services/consumidor.service';
import { ReclamacaoService } from './services/reclamacao.service';
import { StatusService } from './services/status.service';
import { ContatoComponent } from './components/contato/contato.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { EscolhaTipoUsuarioComponent } from './login/escolha-tipo-usuario/escolha-tipo-usuario.component';
import { RecuperarSenhaComponent } from './login/recuperar-senha/recuperar-senha.component';

@NgModule({
  declarations: [
    AppComponent,
    RankingComponent,
    HeaderComponent,
    HomeComponent,
    SidebarComponent,
    ContatoComponent,
    EscolhaTipoUsuarioComponent,
    RecuperarSenhaComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,

    HttpModule,
    ReactiveFormsModule,
    AreaEmpresaModule,
    CidadeModule,
    ComentarioModule,
    EmpresaModule,
    EstadoModule,
    ReclamacaoModule,
    StatusModule,
    ConsumidorModule,
    NgbModule.forRoot(),
    
  ],
  providers: [
    HttpService, 
    FormBuilder, 
    AreaEmpresaService, 
    CidadeService, 
    ComentarioService, 
    ConsumidorService, 
    EmpresaService, 
    EstadoService, 
    ReclamacaoService, 
    StatusService,
    LoginService
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
