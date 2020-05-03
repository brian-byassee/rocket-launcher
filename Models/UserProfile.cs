//Created File
using System.ComponentModel.DataAnnotations;

namespace rocket_launch.Models
{
  public class UserProfile
  {
    public string FirstName { get; set; }
    public string LastName { get; set; }
    [Key]
    public string Email { get; set; }
    public string UserName { get; set; }
    public string Password { get; set; }
  }
}