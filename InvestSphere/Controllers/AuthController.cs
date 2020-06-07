using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using InvestSphere.Context;
using InvestSphere.Models;
using InvestSphere.Util;
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
        public async Task<IActionResult> Get(string login, string password, bool remember)
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
                {
                    AuthToken token = new AuthToken();
                    token.UserId = user.Id;
                    token.Token = Guid.NewGuid().ToString();
                    if (remember)
                        token.ExpirationDate = new DateTime(2100, 12, 30);
                    else
                    {
                        DateTime today = DateTime.Today;
                        token.ExpirationDate = today.AddDays(1);
                    }
                    token.IsActive = true;
                    _ctx.Tokens.Add(token);
                    _ctx.SaveChanges();
                    return Ok(token);
                }
                else
                    return NotFound(NOT_FOUND);
            }
        }

        [HttpGet, Route("verify")]
        public async Task<IActionResult> VerifyToken(string token)
        {
            AuthToken authToken = _ctx.Tokens.FirstOrDefault(t => t.Token == token);
            if (authToken == null)
                return NotFound();
            else
            {
                if (!authToken.IsActive)
                    return NotFound();
                else
                {
                    if (authToken.ExpirationDate < DateTime.Today)
                    {
                        authToken.IsActive = false;
                        _ctx.SaveChanges();
                        return NotFound();
                    }
                    else
                    {
                        return Ok(token);
                    }
                }
            }
        }
        [HttpPost, Route("register")]
        public async Task<IActionResult> RegisterUser([FromBody] User user)
        {
            if (!TryValidateModel(user, nameof(user)))
            {
                return Problem();
            }
            else
            {
                user.Password = AppHelper.HashPassword(user.Password);
                _ctx.Users.Add(user);
                _ctx.SaveChanges();
                return Ok(user);
            }
        }
    }
}