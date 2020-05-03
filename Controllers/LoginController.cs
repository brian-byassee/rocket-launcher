//Created File
using System.Threading.Tasks;
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
    [HttpGet]
    [Route("{userName}")]
    public bool ValidateUserName([FromRoute] string userName)
    {
      return _userProfileRepository.CheckIfUserNameExists(userName);
    }
    [HttpPost]
    public async Task<UserProfile> CreateProfile([FromBody] UserProfile userProfile)
    {
      return await _userProfileRepository.AddUserProfile(userProfile);
    }
  }
}