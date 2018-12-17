using ReclameTech.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace ReclameTech.Repository
{
    public class EstadoRepository : BaseRepository
    {
        public tb_Estado GetOne(int id)
        {
            return base.DataModel.tb_Estado.FirstOrDefault(e => e.Id_estado == id);
        }
        public List<tb_Estado> GetAll()
        {
            return base.DataModel.tb_Estado.ToList();
        }
        public void Delete(int id)
        {
            var entity = GetOne(id);
            base.DataModel.tb_Estado.Remove(entity);
            base.DataModel.SaveChanges();
        }
        public void Save(tb_Estado entity)
        {
            base.DataModel.Entry(entity).State = entity.Id_estado == 0 ?
                    EntityState.Added : System.Data.Entity.EntityState.Modified;
            base.DataModel.SaveChanges();
        }
    }
}