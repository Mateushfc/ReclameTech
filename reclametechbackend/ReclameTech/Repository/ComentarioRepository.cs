using ReclameTech.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace ReclameTech.Repository
{
    public class ComentarioRepository : BaseRepository
    {
        public tb_Comentario GetOne(int id)
        {
            return base.DataModel.tb_Comentario.FirstOrDefault(e => e.Id_comentario == id);
        }
        public List<tb_Comentario> GetAll()
        {
            return base.DataModel.tb_Comentario.ToList();
        }
        public void Delete(int id)
        {
            var entity = GetOne(id);
            base.DataModel.tb_Comentario.Remove(entity);
            base.DataModel.SaveChanges();
        }
        public void Save(tb_Comentario entity)
        {
            base.DataModel.Entry(entity).State = entity.Id_comentario == 0 ?
                    EntityState.Added : System.Data.Entity.EntityState.Modified;
            base.DataModel.SaveChanges();
        }
    }
}