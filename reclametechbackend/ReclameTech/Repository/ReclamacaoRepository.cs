using ReclameTech.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace ReclameTech.Repository
{
    public class ReclamacaoRepository : BaseRepository
    {
        public tb_Reclamacao GetOne(int id)
        {
            return base.DataModel.tb_Reclamacao.FirstOrDefault(e => e.Id_reclamacao == id);
        }
        public List<tb_Reclamacao> GetAll()
        {
            return base.DataModel.tb_Reclamacao.ToList();
        }
        public void Delete(int id)
        {
            var entity = GetOne(id);
            base.DataModel.tb_Reclamacao.Remove(entity);
            base.DataModel.SaveChanges();
        }
        public void Save(tb_Reclamacao entity)
        {
            base.DataModel.Entry(entity).State = entity.Id_reclamacao == 0 ?
                    EntityState.Added : System.Data.Entity.EntityState.Modified;
            base.DataModel.SaveChanges();
        }
    }
}