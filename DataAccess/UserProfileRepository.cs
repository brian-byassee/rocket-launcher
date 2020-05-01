using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using rocket_launch.Models;

namespace rocket_launch.DataAccess
{
  public class UserProfileRepository
  {
    private static UserProfileContext _context;
    public List<UserProfile> UserProfiles { get; set; }
    public UserProfileRepository(UserProfileContext context)
    {
      _context = context;
      UserProfiles = new List<UserProfile>();
    }
    public UserProfile GetExistingProfile(string userName, string password)
    {
      //var up =_context.UserProfiles.Find(up => up.Password.Equals(password) && up.UserName.Equals(userName));
      var up = UserProfiles.Find(up => up.Password.Equals(password) && up.UserName.Equals(userName));
      return up;
    }
    public async Task<UserProfile> AddUserProfile(UserProfile up)
    {
      _context.UserProfiles.Add(up);
      await _context.SaveChangesAsync();
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
