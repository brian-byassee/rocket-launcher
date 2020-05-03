//Created File
using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using rocket_launch.DataAccess;
using rocket_launch.Models;

namespace rocket_launch.Controllers
{
  [ApiController]
  [Route("[controller]")]
  public class HistoryController : ControllerBase
  {
    private UserHistoryRepository _userHistoryRepository;
    public HistoryController(UserHistoryRepository userHistoryRepository)
    {
      _userHistoryRepository = userHistoryRepository;
    }
    
    [HttpGet]
    [Route("{email}")]
    public List<HistoryRecord> GetHistory([FromRoute] string email)
    {
      List<HistoryRecord> historyRecords = new List<HistoryRecord>();
      try
      {
        historyRecords = _userHistoryRepository.GetHistoryRecords(email);
      }
      catch (Exception ex)
      {
        Console.WriteLine(ex);
      }
      return historyRecords;
    }
    [HttpPost]
    public async System.Threading.Tasks.Task<bool> RecordLaunchAsync([FromBody] HistoryRecord historyRecord)
    {
      bool savedRocketLaunch = false;
      try
      {
        savedRocketLaunch = await _userHistoryRepository.RecordLaunchAsync(historyRecord);
      }
      catch (Exception ex)
      {
        Console.WriteLine(ex);
      }
      return savedRocketLaunch;
    }
  }
}