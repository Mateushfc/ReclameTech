using ReclameTech.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace ReclameTech.Repository
{
    public class StatusRepository : BaseRepository
    {
        public tb_Status GetOne(int id)
        {
            return base.DataModel.tb_Status.FirstOrDefault(e => e.Id_status == id);
        }
        public List<tb_Status> GetAll()
        {
            return base.DataModel.tb_Status.ToList();
        }
        public void Delete(int id)
        {
            var entity = GetOne(id);
            base.DataModel.tb_Status.Remove(entity);
            base.DataModel.SaveChanges();
        }
        public void Save(tb_Status entity)
        {
            base.DataModel.Entry(entity).State = entity.Id_status == 0 ?
                    EntityState.Added : System.Data.Entity.EntityState.Modified;
            base.DataModel.SaveChanges();
        }
    }
}