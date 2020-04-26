using System.Collections.Generic;
using rocket_launch.Models;

namespace rocket_launch.DataAccess
{
  public class UserProfileRepository
  {
    private List<UserProfile> userProfiles = new List<UserProfile>();

    public bool AddUserProfile(UserProfile up)
    {
      userProfiles.Add(up);
      return true;
    }
  }
}
