using System.Collections.Generic;
using System.Linq;
using rocket_launch.Models;

namespace rocket_launch.DataAccess
{
  public class UserProfileRepository
  {
    public List<UserProfile> UserProfiles { get; set; }
    public UserProfileRepository()
    {
      UserProfiles = new List<UserProfile>();
    }
    public UserProfile GetExistingProfile(string userName, string password)
    {
      var up = UserProfiles.Find(up => up.Password.Equals(password) && up.UserName.Equals(userName));
      return up;
    }
    public UserProfile AddUserProfile(UserProfile up)
    {
      UserProfiles.Add(up);
      return up;
    }
    public bool CheckIfUserNameExists(string userName)
    {
      var thing = UserProfiles.Any(up => up.UserName == userName);
       return thing;
    }
  }
}
