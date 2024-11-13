using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Entities
{
    public class UserPreference : BaseEntity
    {
        public required AppUser AppUserID { get; set; }
        public string AgeGroup { get; set; } = string.Empty;
        public string Gender { get; set; } = string.Empty;
        public string AreaCode { get; set; } = string.Empty;
        public string UserStyle { get; set; } = string.Empty;
        public string UserInterests { get; set; } = string.Empty;
    }
}
