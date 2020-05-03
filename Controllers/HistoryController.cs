//Created File
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
    public List<HistoryRecord> GetHistory([FromRoute] string userName)
    {
      return _userHistoryRepository.GetHistoryRecords(userName);
    }
    [HttpPost]
    [Route("{userName}")]
    public bool RecordLaunch([FromBody] HistoryRecord historyRecord)
    {
      return _userHistoryRepository.RecordLaunch(historyRecord);
    }
  }
}