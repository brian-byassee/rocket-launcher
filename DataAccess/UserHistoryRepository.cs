//Created File
using System.Collections.Generic;
using System.Linq;
using rocket_launch.Models;

namespace rocket_launch.DataAccess
{
  public class UserHistoryRepository
  {
    private static RocketLauncherContext _context;
    public UserHistoryRepository(RocketLauncherContext context)
    {
      _context = context;
    }
    public List<HistoryRecord> GetHistoryRecords(string email)
    {
      var historyRecords = _context.HistoryRecords.Where(hr => hr.Email == email).ToList();
      return historyRecords;
    }
    public async System.Threading.Tasks.Task<bool> RecordLaunchAsync(HistoryRecord hr)
    {
      _context.HistoryRecords.Add(hr);
      var entryCount = await _context.SaveChangesAsync();
      return entryCount > 0;
    }
  }
}
