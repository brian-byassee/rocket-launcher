//Created File
using System.Linq;
using System.Threading.Tasks;
using rocket_launch.Models;

namespace rocket_launch.DataAccess
{
  public class UserProfileRepository
  {
    private static RocketLauncherContext _context;
    public UserProfileRepository(RocketLauncherContext context)
    {
      _context = context;
    }
    public UserProfile GetExistingProfile(string userName, string password)
    {
      var up =_context.UserProfiles.SingleOrDefault(up => up.Password.Equals(password) && up.UserName.Equals(userName));
      return up;
    }
    public async Task<UserProfile> AddUserProfile(UserProfile up)
    {
      _context.UserProfiles.Add(up);
      await _context.SaveChangesAsync();
      return up;
    }
    public bool CheckIfUserNameExists(string userName)
    {
      var thing = _context.UserProfiles.Any(up => up.UserName == userName);
      return thing;
    }
  }
}
