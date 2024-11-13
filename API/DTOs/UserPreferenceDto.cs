using Core.Entities;
using System.ComponentModel.DataAnnotations;

namespace API.DTOs
{
    public class UserPreferenceDto
    {
        [Required]
        public AppUser? AppUserID { get; set; }
        public string AgeGroup { get; set; } = string.Empty;
        public string Gender { get; set; } = string.Empty;
        public string AreaCode { get; set; } = string.Empty;
        public string UserStyle { get; set; } = string.Empty;
        public string UserInterests { get; set; } = string.Empty;
    }
}
