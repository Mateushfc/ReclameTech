using ReclameTech.Models;
using ReclameTech.Repository;
using System;
using System.Collections.Generic;
using System.Net;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;

namespace ReclameTech.Controllers
{
    [EnableCors("*", "*", "*")]

    public class ReclamacaoController : ApiController
    {
        private ReclamacaoRepository _ReclamacaoRepository;

        public ReclamacaoRepository ReclamacaoRepository
        {
            get
            {
                if (_ReclamacaoRepository == null)
                {
                    _ReclamacaoRepository = new ReclamacaoRepository();
                }
                return _ReclamacaoRepository;
            }

        }
        // GET: api/Reclamacao
        public IEnumerable<tb_Reclamacao> GetReclamacao()
        {
            return ReclamacaoRepository.GetAll();

        }

        // GET: api/Reclamacao/5
        [ResponseType(typeof(tb_Reclamacao))]
        public tb_Reclamacao GetReclamacao(int id)
        {
            return ReclamacaoRepository.GetOne(id);

        }

        // PUT: api/Reclamacao/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutReclamacao(int id, tb_Reclamacao tb_Reclamacao)
        {
            ReclamacaoRepository.Save(tb_Reclamacao);
            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Reclamacao
       
        public IHttpActionResult PostReclamacao(Reclamacao reclamacao)
         {
            reclamacao.data = DateTime.Now;

            tb_Reclamacao tb_Reclamacao = new tb_Reclamacao()
            {
                data = reclamacao.data,
                fk_consumidor = reclamacao.fk_consumidor,
                fk_empresa = reclamacao.fk_empresa,
                Id_reclamacao = reclamacao.Id_reclamacao,
                prestadorServico = reclamacao.prestadorServico,
                produtoEmpresa = reclamacao.produtoEmpresa,
                respostaEmpresa = reclamacao.respostaEmpresa,
                tituloReclamacao = reclamacao.tituloReclamacao,
                tb_Comentario = reclamacao.tb_Comentario
            };

            ReclamacaoRepository.Save(tb_Reclamacao);
            return StatusCode(HttpStatusCode.NoContent);

        }

        public class Reclamacao
        {
            public int Id_reclamacao { get; set; }
            public System.DateTime data { get; set; }
            public string produtoEmpresa { get; set; }
            public string respostaEmpresa { get; set; }
            public string tituloReclamacao { get; set; }
            public string prestadorServico { get; set; }
            public int fk_consumidor { get; set; }
            public int fk_status { get; set; }
            public int fk_empresa { get; set; }
            public int fk_comentario { get; set; }

            public virtual tb_Comentario tb_Comentario { get; set; }
       
        }

        // DELETE: api/Reclamacao/5
        [ResponseType(typeof(tb_Reclamacao))]
        public void Delete(int id)
        {
            ReclamacaoRepository.Delete(id);
        }
    }
}