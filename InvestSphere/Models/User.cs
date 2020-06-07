using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace InvestSphere.Models
{
	public class User
	{
		public long Id { get; set; }
		[Required]
		public string FirstName { get; set; }
		[Required]
		public string LastName { get; set; }
		[Required]
		public string Login { get; set; }
		[Required]
		public string Password { get; set; }
		public UserRole Role { get; set; }
		public string PhotoPath { get; set; }
	}
	
	public enum UserRole
	{
		Ordinary = 0,
		Administrator = 1
	}
}
