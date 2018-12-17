using ReclameTech.Models;
using ReclameTech.Repository;
using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;

namespace ReclameTech.Controllers
{
    [EnableCors("*", "*", "*")]
    public class EmpresaController : ApiController
    {
        private EmpresaRepository _EmpresaRepository;

        public EmpresaRepository EmpresaRepository
        {
            get
            {
                if (_EmpresaRepository == null)
                {
                    _EmpresaRepository = new EmpresaRepository();
                }
                return _EmpresaRepository;
            }

        }
        // GET: api/Empresa
        public IEnumerable<tb_Empresa> GetEmpresa()
        {
            return EmpresaRepository.GetAll();
        }

        // GET: api/Empresa/5
        [ResponseType(typeof(tb_Empresa))]
        public tb_Empresa GetEmpresa(int id)
        {
            return EmpresaRepository.GetOne(id);

        }

        // PUT: api/Empresa/5
        [ResponseType(typeof(void))]
        public void PutEmpresa(int id, tb_Empresa tb_Empresa)
        {
            EmpresaRepository.Save(tb_Empresa);
        }

        // POST: api/Empresa
        [ResponseType(typeof(tb_Empresa))]
        public void PostEmpresa(tb_Empresa tb_Empresa)
        {
            EmpresaRepository.Save(tb_Empresa);
        }

        // DELETE: api/Empresa/5
        [ResponseType(typeof(tb_Empresa))]
        public void Delete(int id)
        {
            EmpresaRepository.Delete(id);
        }
    }
}