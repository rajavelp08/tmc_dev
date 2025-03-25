using Azure;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TMC.Models;

namespace TMC.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class TmcAdminController : ControllerBase
    {
        private readonly ILogger<TmcAdminController> _logger;

        private readonly AppContext _context;

        public TmcAdminController(ILogger<TmcAdminController> logger, AppContext context)
        {
            _logger = logger;
            _context = context;
        }


        [HttpGet(Name = "GetUsers")]
        public async Task<ActionResult<IEnumerable<User>>> GetUserList()
        {
            return await _context.Users.ToListAsync();
        }
    }
}
