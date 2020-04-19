using Microsoft.AspNetCore.Mvc;

namespace rocket_launch.Controllers
{
  public class LoginController : ControllerBase
  {
    [HttpGet]
    public bool Get()
    {
      return true;
    }
  }
}