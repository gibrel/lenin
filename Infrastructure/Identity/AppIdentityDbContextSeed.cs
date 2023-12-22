using Core.Entities.Identity;
using Microsoft.AspNetCore.Identity;

namespace Infrastructure.Identity
{
    public class AppIdentityDbContextSeed
    {
        public static async Task SeedUsersAsync(UserManager<AppUser> userManager)
        {
            if (!userManager.Users.Any())
            {
                var user = new AppUser
                {
                    DisplayName = "Bilbo",
                    Email = "bilbo@baggins.com",
                    UserName = "bilbo@baggins.com",
                    Address = new Address
                    {
                        FirstName = "Bilbo",
                        LastName = "Baggins",
                        Street = "Bag End, Bagshot Row",
                        City = "Hobbiton",
                        State = "SR",
                        ZipCode = "02889"
                    }
                };

                await userManager.CreateAsync(user, "Pa$$w0rd");
            }
        }
    }
}