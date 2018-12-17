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
    public class ComentarioController : ApiController
    {
        private ComentarioRepository _ComentarioRepository;

        public ComentarioRepository ComentarioRepository
        {
            get
            {
                if (_ComentarioRepository == null)
                {
                    _ComentarioRepository = new ComentarioRepository();
                }
                return _ComentarioRepository;
            }

        }
        // GET: api/Comentario
        public IEnumerable<tb_Comentario> GetComentario()
        {
            return ComentarioRepository.GetAll();
        }

        // GET: api/Comentario/5
        [ResponseType(typeof(tb_Comentario))]
        public tb_Comentario GetComentario(int id)
        {
            return ComentarioRepository.GetOne(id);

        }

        // PUT: api/Comentario/5
        [ResponseType(typeof(void))]
        public void PutComentario(int id, tb_Comentario tb_Comentario)
        {
            ComentarioRepository.Save(tb_Comentario);
        }

        // POST: api/Comentario
        [ResponseType(typeof(tb_Comentario))]
        public void PostComentario(tb_Comentario tb_Comentario)
        {
            ComentarioRepository.Save(tb_Comentario);
        }

        // DELETE: api/Comentario/5
        [ResponseType(typeof(tb_Comentario))]
        public void Delete(int id)
        {
            ComentarioRepository.Delete(id);
        }
    }
}