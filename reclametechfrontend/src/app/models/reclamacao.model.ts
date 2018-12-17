import { Status } from './status.model';
import { Comentario } from './comentario.model';
export class Reclamacao {
    public Id_reclamacao: number;
    public produtoEmpresa: string;
    public respostaEmpresa: string;
    public tituloReclamacao: string;
    public prestadorServico: string;
    public fk_consumidor: number;
    public fk_empresa: number;
    public fk_status: number;
    public fk_comentario: number;
    public data: Date;
    
    public tb_Comentario: Comentario;
    public tb_Status: Status;

}