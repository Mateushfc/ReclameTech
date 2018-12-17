using ReclameTech.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace ReclameTech.Controllers
{

    [RoutePrefix("api")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class LoginController : ApiController
    {
        private LoginRepository _login;

        public LoginRepository Login
        {
            get
            {
                if (_login == null)
                {
                    _login = new LoginRepository();
                }
                return _login;
            }

        }


        [HttpPost]
        [Route("logar")]
        public IHttpActionResult Logar(Login login)
        {

            if (!string.IsNullOrEmpty(login.Email) && !string.IsNullOrEmpty(login.Senha))
            {
                _login = Login;

                var consumidor = _login.LogarConsumidor(login.Email, login.Senha);
                var empresa = _login.LogarEmpresa(login.Email, login.Senha);

                if (consumidor == null && empresa == null)
                    return BadRequest("E-mail ou senha incorreto.");

                if (consumidor != null)
                {
                    var usuario = new UsuarioDTO() { Id = consumidor.Id_consumidor, Nome = consumidor.nomeConsumidor };
                    return Ok(usuario);
                }

                else
                {
                    var usuario = new UsuarioDTO() { Id = empresa.Id_empresa, Nome = empresa.nomeUsuario };
                    return Ok(usuario);
                }

            }
            return null;
        }
    }

    public class UsuarioDTO
    {
        public int Id { get; set; }
        public string Nome { get; set; }
    }
    public class Login
    {
        public string Email { get; set; }
        public string Senha { get; set; }
        public string Tipo { get; set; }
    }

}
