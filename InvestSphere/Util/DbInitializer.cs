using InvestSphere.Context;
using InvestSphere.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InvestSphere.Util
{
	public class DbInitializer
	{
		public static void PopulateDatabase(ApplicationContext ctx)
		{
			int usersCount = ctx.Users.Count();
			if (usersCount == 0)
			{
				User user1 = new User
				{
					FirstName = "Панфилов",
					LastName = "Григорий",
					Login = "Panfilov",
					Password = AppHelper.HashPassword("stonks")
				};

				User user2 = new User
				{
					FirstName = "Терентьева",
					LastName = "Анастасия",
					Login = "Terentyeva",
					Password = AppHelper.HashPassword("basicBitch")
				};
				ctx.Users.Add(user1);
				ctx.Users.Add(user2);

				ctx.SaveChanges();
			}
		}
	}
}
