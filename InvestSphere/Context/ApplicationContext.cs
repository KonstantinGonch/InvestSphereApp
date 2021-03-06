﻿using InvestSphere.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InvestSphere.Context
{
	public class ApplicationContext : DbContext
	{
		public DbSet<User> Users { get; set; }
		public DbSet<AuthToken> Tokens { get; set; }

		public ApplicationContext(DbContextOptions options) : base(options)
		{
		}
	}
}
