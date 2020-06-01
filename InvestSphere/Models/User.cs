﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InvestSphere.Models
{
	public class User
	{
		public long Id { get; set; }
		public string FirstName { get; set; }
		public string LastName { get; set; }
		public string Login { get; set; }
		public string Password { get; set; }
		public UserRole Role { get; set; }
	}
	
	public enum UserRole
	{
		Ordinary = 0,
		Administrator = 1
	}
}
