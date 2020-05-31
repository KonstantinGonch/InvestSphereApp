using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using InvestSphere.Context;
using InvestSphere.Models;
using InvestSphere.Util;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace InvestSphere.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private ApplicationContext _ctx;
        private const string NOT_FOUND = "Пользователь не обнаружен";

        public AuthController(ApplicationContext ctx)
        {
            _ctx = ctx;
        }
        [HttpGet]
        public async Task<IActionResult> Get(string login, string password)
        {
            Dictionary<string, string> result = new Dictionary<string, string>();
            result.Add("result", "");
            result.Add("message", "");
            result.Add("id", "");

            User user = _ctx.Users.FirstOrDefault(u => u.Login == login);
            if (user == null)
            {
                return NotFound(NOT_FOUND);
            }
            else
            {
                if (AppHelper.VerifyHashedPassword(user.Password, password))
                    return Ok(user);
                else
                    return NotFound(NOT_FOUND);
            }

        }
    }
}