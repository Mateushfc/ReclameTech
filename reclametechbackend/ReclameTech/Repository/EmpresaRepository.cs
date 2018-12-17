using ReclameTech.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace ReclameTech.Repository
{
    public class EmpresaRepository : BaseRepository
    {
        public tb_Empresa GetOne(int id)
        {
            return base.DataModel.tb_Empresa.FirstOrDefault(e => e.Id_empresa == id);
        }
        public List<tb_Empresa> GetAll()
        {
            return base.DataModel.tb_Empresa.ToList();
        }
        public void Delete(int id)
        {
            var entity = GetOne(id);
            base.DataModel.tb_Empresa.Remove(entity);
            base.DataModel.SaveChanges();
        }
        public void Save(tb_Empresa entity)
        {
            base.DataModel.Entry(entity).State = entity.Id_empresa == 0 ?
                    EntityState.Added : System.Data.Entity.EntityState.Modified;
            base.DataModel.SaveChanges();
        }
    }
}