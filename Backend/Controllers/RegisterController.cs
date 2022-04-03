using Backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [ApiController]
    [Route("api/cadastro")]
    public class RegisterController : ControllerBase
    {
        [HttpPost]
        public IActionResult Post([FromBody] Register input)
        {
            try {
                var result = input.value * input.instalments * 1.05m;
                return Ok(result);
            } catch (Exception ex) {
                return BadRequest($"Erro: {ex.Message}");
            }
        }
    }
}