using System.Collections.Generic;
using rocket_launch.Models;

namespace rocket_launch.DataAccess
{
  public class UserProfileRepository
  {
    private List<UserProfile> userProfiles = new List<UserProfile>();
    public UserProfile GetExistingProfile(string userName, string password) 
    {
      var up = userProfiles.Find(up => up.Password.Equals(password) && up.UserName.Equals(userName));
      return up;
    }
    public UserProfile AddUserProfile(UserProfile up)
    {
      userProfiles.Add(up);
      return up;
    }
  }
}
