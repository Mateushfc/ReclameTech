using ReclameTech.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace ReclameTech.Repository
{
    public class AreaEmpresaRepository : BaseRepository
    {
        public tb_AreaEmpresa GetOne(int id)
        {
            return base.DataModel.tb_AreaEmpresa.FirstOrDefault(e => e.Id_area == id);
        }
        public List<tb_AreaEmpresa> GetAll()
        {
            return base.DataModel.tb_AreaEmpresa.ToList();
        }
        public void Delete(int id)
        {
            var entity = GetOne(id);
            base.DataModel.tb_AreaEmpresa.Remove(entity);
            base.DataModel.SaveChanges();
        }
        public void Save(tb_AreaEmpresa entity)
        {
            base.DataModel.Entry(entity).State = entity.Id_area == 0 ?
                    EntityState.Added : System.Data.Entity.EntityState.Modified;
            base.DataModel.SaveChanges();
        }
    }
}