using ReclameTech.Models;
using ReclameTech.Repository;
using System.Collections.Generic;
using System.Net;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;

namespace ReclameTech.Controllers
{
    [EnableCors("*", "*", "*")]

    public class EstadoController : ApiController
    {
        private EstadoRepository _EstadoRepository;

        public EstadoRepository EstadoRepository
        {
            get
            {
                if (_EstadoRepository == null)
                {
                    _EstadoRepository = new EstadoRepository();
                }
                return _EstadoRepository;
            }

        }
        // GET: api/Estado
        public IEnumerable<tb_Estado> GetEstado()
        {
            return EstadoRepository.GetAll();
            
        }

        // GET: api/Estado/5
        [ResponseType(typeof(tb_Estado))]
        public tb_Estado GetEstado(int id)
        {
            return EstadoRepository.GetOne(id);

        }

        // PUT: api/Estado/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutEstado(int id, tb_Estado tb_Estado)
        {
            EstadoRepository.Save(tb_Estado);
            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Estado
        [ResponseType(typeof(tb_Estado))]
        public IHttpActionResult PostEstado(tb_Estado tb_Estado)
        {
            EstadoRepository.Save(tb_Estado);
            return StatusCode(HttpStatusCode.NoContent);

        }

        // DELETE: api/Estado/5
        [ResponseType(typeof(tb_Estado))]
        public void Delete(int id)
        {
            EstadoRepository.Delete(id);
        }
    }
}