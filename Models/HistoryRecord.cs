
//Created File
using System.ComponentModel.DataAnnotations;

namespace rocket_launch.Models
{
  public class HistoryRecord
  {
    [Key]
    public string Email { get; set; }
    public bool Success { get; set; }
    public int Mass { get; set; }
    public int Angle { get; set; }
    public int Force { get; set; }
  }
}