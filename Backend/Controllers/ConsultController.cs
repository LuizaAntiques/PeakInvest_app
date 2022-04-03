using Backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [ApiController]
    [Route("api/consulta")]
    public class ConsultController : ControllerBase
    {
        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            try {
                var list = new List<KeyValuePair<int, string>>();

                list.Add(new KeyValuePair<int, string>(1, "João"));
                list.Add(new KeyValuePair<int, string>(2, "Maria"));
                list.Add(new KeyValuePair<int, string>(3, "Ana"));

                var result = list.Find(iten => iten.Key == id);

                return Ok(result.Value);
            } catch (Exception ex) {
                return BadRequest($"Erro: {ex.Message}");
            }
        }
    }
}