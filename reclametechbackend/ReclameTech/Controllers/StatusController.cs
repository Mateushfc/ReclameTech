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

    public class StatusController : ApiController
    {
        private StatusRepository _StatusRepository;

        public StatusRepository StatusRepository
        {
            get
            {
                if (_StatusRepository == null)
                {
                    _StatusRepository = new StatusRepository();
                }
                return _StatusRepository;
            }

        }
        // GET: api/Status
        public IEnumerable<tb_Status> GetStatus()
        {
            return StatusRepository.GetAll();

        }

        // GET: api/Status/5
        [ResponseType(typeof(tb_Status))]
        public tb_Status GetStatus(int id)
        {
            return StatusRepository.GetOne(id);

        }

        // PUT: api/Status/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutStatus(int id, tb_Status tb_Status)
        {
            StatusRepository.Save(tb_Status);
            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Status
        [ResponseType(typeof(tb_Status))]
        public IHttpActionResult PostStatus(tb_Status tb_Status)
        {
            StatusRepository.Save(tb_Status);
            return StatusCode(HttpStatusCode.NoContent);

        }

        // DELETE: api/Status/5
        [ResponseType(typeof(tb_Status))]
        public void Delete(int id)
        {
            StatusRepository.Delete(id);
        }
    }
}