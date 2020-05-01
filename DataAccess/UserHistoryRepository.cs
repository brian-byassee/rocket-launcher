using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
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
