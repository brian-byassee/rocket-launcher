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
    [HttpGet]
    public UserProfile SignIn([FromQuery] string password, [FromQuery] string userName)
    {
      return _userProfileRepository.GetExistingProfile(userName, password);
    }
    [HttpPost]
    public UserProfile CreateProfile([FromBody] UserProfile userProfile)
    {
      return _userProfileRepository.AddUserProfile(userProfile);
    }
  }
}