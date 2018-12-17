using ReclameTech.Models;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;

namespace ReclameTech.Repository
{
    public class ConsumidorRepository : BaseRepository
    {
        public tb_Consumidor GetOne(int id)
        {
            return base.DataModel.tb_Consumidor.FirstOrDefault(e => e.Id_consumidor == id);
        }
        public List<tb_Consumidor> GetAll()
        {
            return base.DataModel.tb_Consumidor.ToList();
        }
        public void Delete(int id)
        {
            var entity = GetOne(id);
            base.DataModel.tb_Consumidor.Remove(entity);
            base.DataModel.SaveChanges();
        }
        public void Save(tb_Consumidor entity)
        {
            base.DataModel.Entry(entity).State = entity.Id_consumidor == 0 ?
                    EntityState.Added : System.Data.Entity.EntityState.Modified;
            base.DataModel.SaveChanges();
        }
    }
}