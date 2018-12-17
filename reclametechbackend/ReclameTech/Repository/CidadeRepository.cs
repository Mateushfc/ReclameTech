using ReclameTech.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace ReclameTech.Repository
{
    public class CidadeRepository : BaseRepository
    {
        public tb_Cidade GetOne(int id)
        {
            return base.DataModel.tb_Cidade.FirstOrDefault(e => e.Id_Cidade == id);
        }
        public List<tb_Cidade> GetAll()
        {
            return base.DataModel.tb_Cidade.ToList();
        }
        public void Delete(int id)
        {
            var entity = GetOne(id);
            base.DataModel.tb_Cidade.Remove(entity);
            base.DataModel.SaveChanges();
        }
        public void Save(tb_Cidade entity)
        {
            base.DataModel.Entry(entity).State = entity.Id_Cidade == 0 ?
                    EntityState.Added : System.Data.Entity.EntityState.Modified;
            base.DataModel.SaveChanges();
        }
    }
}