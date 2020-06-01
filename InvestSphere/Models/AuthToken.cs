using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace InvestSphere.Models
{
	public class AuthToken
	{
		public long Id { get; set; }
		public string Token { get; set; }
		public long UserId { get; set; }
		public DateTime ExpirationDate { get; set; }
		public bool IsActive { get; set; }

		[ForeignKey("UserId")]
		public User User { get; set; }
	}
}
