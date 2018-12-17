import { StatusService } from './../../../services/status.service';
import { ComentarioService } from './../../../services/comentario.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ReclamacaoService } from 'src/app/services/reclamacao.service';
import { Reclamacao } from 'src/app/models/reclamacao.model';

@Component({
  selector: 'app-reposta-reclamacao',
  templateUrl: './reposta-reclamacao.component.html',
  styleUrls: ['./reposta-reclamacao.component.scss']
})
export class RepostaReclamacaoComponent implements OnInit {

  private reclamacao: Reclamacao;

  constructor(private apiStatus: StatusService, private service: ReclamacaoService, private serviceComentario: ComentarioService, private rota: ActivatedRoute) { }

  ngOnInit() {
    this.getReclamacao();
  }

  getReclamacao() {
    this.service.get(this.rota.snapshot.params["Id_reclamacao"]).subscribe((data) => {
      this.reclamacao = data, console.log(data);

      if (this.reclamacao.respostaEmpresa != null) {
        return;
      }
      else {
        this.reclamacao.respostaEmpresa = "Reclamação não respondida";
      }
    });
  }

}
