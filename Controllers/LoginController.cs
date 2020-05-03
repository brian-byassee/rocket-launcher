//Created File
using System;
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
    public UserProfile SignIn([FromQuery] string password, [FromQuery] string email)
    {
      UserProfile userProfile = new UserProfile();
      try
      {
        userProfile = _userProfileRepository.GetExistingProfile(email, password);
      }
      catch (Exception ex)
      {
        Console.WriteLine(ex);
      }
      return userProfile;
    }
    [HttpGet]
    [Route("{email}")]
    public bool ValidateEmail([FromRoute] string email)
    {
      bool isValidEmail = false;
      try
      {
        isValidEmail = _userProfileRepository.CheckIfEmailExists(email);
      }
      catch (Exception ex)
      {
        Console.WriteLine(ex);
      }
      return isValidEmail;
    }
    [HttpPost]
    public async Task<UserProfile> CreateProfile([FromBody] UserProfile userProfile)
    {
      UserProfile newUserProfile = new UserProfile();
      try
      {
        newUserProfile = await _userProfileRepository.AddUserProfile(userProfile);
      }
      catch (Exception ex)
      {
        Console.WriteLine(ex);
      }
      return newUserProfile;
    }
  }
}