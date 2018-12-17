using ReclameTech.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ReclameTech.Repository
{
    public class LoginRepository : BaseRepository
    {
        public tb_Consumidor LogarConsumidor(string email,string senha)
        {
          
            var consumidor = DataModel.tb_Consumidor.FirstOrDefault(x => x.emailConsumidor == email && x.senhaConsumidor == senha);

                return consumidor;

        }
        public tb_Empresa LogarEmpresa(string email, string senha)
        {

            var empresa = DataModel.tb_Empresa.FirstOrDefault(x => x.emailPJ == email && x.senhaPJ == senha);

            return empresa;

        }

    }
}