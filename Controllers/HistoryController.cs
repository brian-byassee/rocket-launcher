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
    [Route("{userName}")]
    public List<HistoryRecord> GetHistory([FromRoute] string userName, [FromQuery] int recordCount, [FromQuery] int startLocation)
    {
      return _userHistoryRepository.GetHistoryRecords(userName, recordCount, startLocation);
    }
    [HttpPost]
    [Route("{userName}")]
    public bool RecordLaunch([FromBody] HistoryRecord historyRecord)
    {
      return _userHistoryRepository.RecordLaunch(historyRecord);
    }
  }
}