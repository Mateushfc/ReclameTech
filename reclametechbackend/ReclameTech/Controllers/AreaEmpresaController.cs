using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using ReclameTech.Models;
using ReclameTech.Repository;
using System.Web.Http.Cors;

namespace ReclameTech.Controllers
{
    [EnableCors("*", "*", "*")]
    public class AreaEmpresaController : ApiController
    {
        private AreaEmpresaRepository _AreaEmpresaRepository;

        public AreaEmpresaRepository AreaEmpresaRepository
        {
            get
            {
                if(_AreaEmpresaRepository == null)
                {
                    _AreaEmpresaRepository = new AreaEmpresaRepository();
                }
                return _AreaEmpresaRepository;
            }

        }
        // GET: api/AreaEmpresa
        public IEnumerable<tb_AreaEmpresa> GetAreaEmpresa()
        {
            return AreaEmpresaRepository.GetAll();
        }

        // GET: api/AreaEmpresa/5
        [ResponseType(typeof(tb_AreaEmpresa))]
        public tb_AreaEmpresa GetAreaEmpresa(int id)
        {     
            return AreaEmpresaRepository.GetOne(id);

        }

        // PUT: api/AreaEmpresa/5
        [ResponseType(typeof(void))]
        public void PutAreaEmpresa(int id, tb_AreaEmpresa tb_AreaEmpresa)
        {
            AreaEmpresaRepository.Save(tb_AreaEmpresa);
        }

        // POST: api/AreaEmpresa
        [ResponseType(typeof(tb_AreaEmpresa))]
        public IHttpActionResult PostAreaEmpresa(tb_AreaEmpresa tb_AreaEmpresa)
        {
            AreaEmpresaRepository.Save(tb_AreaEmpresa);
            return StatusCode(HttpStatusCode.OK);
        }

        // DELETE: api/AreaEmpresa/5
        [ResponseType(typeof(tb_AreaEmpresa))]
        public void Delete(int id)
        {
            AreaEmpresaRepository.Delete(id);
        }
    }
}