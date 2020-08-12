using Inventory.Domain.Entities;
using Inventory.Infrastructure.Identity;
using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Inventory.Infrastructure.Persistence
{
    public static class ApplicationDbContextSeed
    {
        public static async Task SeedDefaultUserAsync(UserManager<ApplicationUser> userManager)
        {
            var defaultUser = new ApplicationUser { UserName = "administrator@localhost", Email = "administrator@localhost" };

            if (userManager.Users.All(u => u.UserName != defaultUser.UserName))
            {
                await userManager.CreateAsync(defaultUser, "Administrator1!");
            }
        }

        public static async Task SeedSampleDataAsync(ApplicationDbContext context)
        {
            // Seed, if necessary
            if (!context.TodoLists.Any())
            {
                context.TodoLists.Add(new TodoList
                {
                    Title = "Shopping",
                    Items =
                    {
                        new TodoItem { Title = "Apples", Done = true },
                        new TodoItem { Title = "Milk", Done = true },
                        new TodoItem { Title = "Bread", Done = true },
                        new TodoItem { Title = "Toilet paper" },
                        new TodoItem { Title = "Pasta" },
                        new TodoItem { Title = "Tissues" },
                        new TodoItem { Title = "Tuna" },
                        new TodoItem { Title = "Water" }
                    }
                });

                await context.SaveChangesAsync();
            }

            if (!context.ItemTypes.Any())
            {
                context.ItemTypes.AddRange(
                    new ItemType
                    {
                        Name = "Food"
                    },
                    new ItemType
                    {
                        Name = "Electronics"
                    },
                    new ItemType
                    {
                        Name = "Invoice"
                    }
                );

                await context.SaveChangesAsync();
            }

            if (!context.Languages.Any())
            {
                context.Languages.AddRange(
                    new Language
                    {
                        Name = "Dutch",
                        NativeName = "Nederlands",
                        Code = "nl"
                    },
                    new Language
                    {
                        Name = "English",
                        NativeName = "English",
                        Code = "en"
                    },
                    new Language
                    {
                        Name = "French",
                        NativeName = "français",
                        Code = "fr"
                    },
                    new Language
                    {
                        Name = "German",
                        NativeName = "Deutsch",
                        Code = "de"
                    }
                );

                await context.SaveChangesAsync();
            }
        }
    }
}
