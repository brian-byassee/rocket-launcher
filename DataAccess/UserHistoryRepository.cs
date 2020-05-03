//Created File
using System.Collections.Generic;
using rocket_launch.Models;

namespace rocket_launch.DataAccess
{
  public class UserHistoryRepository
  {
    public List<HistoryRecord> GetHistoryRecords(string userName)
    {
      return new List<HistoryRecord>();
    }
    public bool RecordLaunch(HistoryRecord hr)
    {
      return true;
    }
  }
}
