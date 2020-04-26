using Microsoft.AspNetCore.Mvc;
using rocket_launch.DataAccess;
using rocket_launch.Models;

namespace rocket_launch.Controllers
{
  [ApiController]
  [Route("[controller]")]
  public class LoginController : ControllerBase
  {
    private UserProfileRepository _userProfileRepository;
    public LoginController(UserProfileRepository userProfileRepository)
    {
      _userProfileRepository = userProfileRepository;
    }
    [HttpPost]
    public bool CreateProfile([FromBody] UserProfile userProfile)
    {
      return _userProfileRepository.AddUserProfile(userProfile);
    }
  }
}