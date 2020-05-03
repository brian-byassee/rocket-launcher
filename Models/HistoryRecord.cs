
//Created File
using System.ComponentModel.DataAnnotations;

namespace rocket_launch.Models
{
  public class HistoryRecord
  {
    public int ID { get; set; }
    public string Email { get; set; }
    public bool Success { get; set; }
    public float Mass { get; set; }
    public float Angle { get; set; }
    public float Force { get; set; }
  }
}