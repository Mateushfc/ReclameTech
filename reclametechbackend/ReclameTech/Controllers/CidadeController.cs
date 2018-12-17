using ReclameTech.Models;
using ReclameTech.Repository;
using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;

namespace ReclameTech.Controllers
{
    [EnableCors("*", "*", "*")]
    public class CidadeController : ApiController
    {
        private CidadeRepository _CidadeRepository;

        public CidadeRepository CidadeRepository
        {
            get
            {
                if (_CidadeRepository == null)
                {
                    _CidadeRepository = new CidadeRepository();
                }
                return _CidadeRepository;
            }

        }
        // GET: api/Cidade
        public IEnumerable<tb_Cidade> GetCidade()
        {
            return CidadeRepository.GetAll();
        }

        // GET: api/Cidade/5
        [ResponseType(typeof(tb_Cidade))]
        public tb_Cidade GetCidade(int id)
        {
            return CidadeRepository.GetOne(id);

        }

        // PUT: api/Cidade/5
        [ResponseType(typeof(void))]
        public void PutCidade(int id, tb_Cidade tb_Cidade)
        {
            CidadeRepository.Save(tb_Cidade);
        }

        // POST: api/Cidade
        [ResponseType(typeof(tb_Cidade))]
        public void PostCidade(tb_Cidade tb_Cidade)
        {
            CidadeRepository.Save(tb_Cidade);
        }

        // DELETE: api/Cidade/5
        [ResponseType(typeof(tb_Cidade))]
        public void Delete(int id)
        {
            CidadeRepository.Delete(id);
        }
    }
}