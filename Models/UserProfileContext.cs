using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace rocket_launch.Models
{
  public class UserProfileContext : DbContext
  {
    public UserProfileContext(DbContextOptions<UserProfileContext> options)
: base(options)
    {
    }

    public DbSet<UserProfile> UserProfiles { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
      modelBuilder.Entity<UserProfile>().ToTable("UserProfiles");
      //modelBuilder.Entity<Enrollment>().ToTable("Enrollment");
      //modelBuilder.Entity<Student>().ToTable("Student");
    }
  }
}
