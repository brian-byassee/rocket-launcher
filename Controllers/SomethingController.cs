using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace rocket_launch.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SomethingController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "SuperCold", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<SomethingController> _logger;

        public SomethingController(ILogger<SomethingController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Something> Get()
        {
            var rng = new Random();
            return Enumerable.Range(1, 10).Select(index => new Something
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            })
            .ToArray();
        }
    }
}
