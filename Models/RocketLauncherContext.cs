//Created File
using Microsoft.EntityFrameworkCore;

namespace rocket_launch.Models
{
  public class RocketLauncherContext : DbContext
  {
    public RocketLauncherContext(DbContextOptions<RocketLauncherContext> options)
: base(options)
    {
    }

    public DbSet<UserProfile> UserProfiles { get; set; }
    public DbSet<HistoryRecord> HistoryRecords { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
      modelBuilder.Entity<UserProfile>().ToTable("UserProfiles");
      modelBuilder.Entity<HistoryRecord>().ToTable("HistoryRecords");
    }
  }
}
