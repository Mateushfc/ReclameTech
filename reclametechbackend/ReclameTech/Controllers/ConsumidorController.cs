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

    public class ConsumidorController : ApiController
    {
        private ConsumidorRepository _ConsumidorRepository;

        public ConsumidorRepository ConsumidorRepository
        {
            get
            {
                if (_ConsumidorRepository == null)
                {
                    _ConsumidorRepository = new ConsumidorRepository();
                }
                return _ConsumidorRepository;
            }

        }
        // GET: api/Consumidor
        public IEnumerable<tb_Consumidor> GetConsumidor()
        {
            return ConsumidorRepository.GetAll();

        }

        // GET: api/Consumidor/5
        [ResponseType(typeof(tb_Consumidor))]
        public tb_Consumidor GetConsumidor(int id)
        {
            return ConsumidorRepository.GetOne(id);

        }

        // PUT: api/Consumidor/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutConsumidor(int id, tb_Consumidor tb_Consumidor)
        {
            ConsumidorRepository.Save(tb_Consumidor);
            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Consumidor
        [ResponseType(typeof(tb_Consumidor))]
        public IHttpActionResult PostConsumidor(tb_Consumidor tb_Consumidor)
        {
            ConsumidorRepository.Save(tb_Consumidor);
            return StatusCode(HttpStatusCode.NoContent);

        }

        // DELETE: api/Consumidor/5
        [ResponseType(typeof(tb_Consumidor))]
        public void Delete(int id)
        {
            ConsumidorRepository.Delete(id);
        }

    }
}