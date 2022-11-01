using GoodReadsProject.Services.GoodReadsProjectCore.Models;
using GoodReadsProject.Services.GoodReadsProjectEF;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GoodReadsProject.Services.Extensions
{
    public static class ServiseCollectionExtensions
    {
        public static void ConfigureIdentity(this IServiceCollection service)
        {
            var builder = service.AddIdentityCore<User>(o =>
            {
                o.Password.RequireDigit = false;
                o.Password.RequireLowercase = false;
                o.Password.RequireUppercase = false;
                o.User.RequireUniqueEmail = true;
            })
            .AddEntityFrameworkStores<BooksContext>()
            .AddDefaultTokenProviders();

        }
    }
}
