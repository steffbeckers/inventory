using IdentityServer4;
using IdentityServer4.Models;
using Inventory.Application.Common.Interfaces;
using Inventory.Infrastructure.Files;
using Inventory.Infrastructure.Identity;
using Inventory.Infrastructure.Persistence;
using Inventory.Infrastructure.Services;
using Microsoft.AspNetCore.Authentication;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System.Collections.Generic;

namespace Inventory.Infrastructure
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddInfrastructure(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<ApplicationDbContext>(options =>
                options.UseSqlServer(
                    configuration.GetConnectionString("Inventory_MSSQL"),
                    b => b.MigrationsAssembly(typeof(ApplicationDbContext).Assembly.FullName)));

            services.AddScoped<IApplicationDbContext>(provider => provider.GetService<ApplicationDbContext>());

            services.AddDefaultIdentity<ApplicationUser>()
                .AddEntityFrameworkStores<ApplicationDbContext>();

            services.ConfigureApplicationCookie(options =>
            {
                options.Cookie.Name = "Inventory.Cookie";
                // TODO
                // options.LoginPath = "/Auth/Login";
                // options.LogoutPath = "/Auth/Logout";
            });

            services.AddIdentityServer()
                .AddApiAuthorization<ApplicationUser, ApplicationDbContext>(options => {
                    options.Clients.Add(new Client()
                    {
                        ClientId = "inventory-angular",
                        ClientName = "Angular app",
                        RequireClientSecret = false,

                        AllowedGrantTypes = GrantTypes.Code,
                        RequirePkce = true,

                        RedirectUris = { "http://localhost:4200" },
                        PostLogoutRedirectUris = { "http://localhost:4200" },
                        AllowedCorsOrigins = { "http://localhost:4200" },

                        AllowedScopes = new List<string>() {
                            IdentityServerConstants.StandardScopes.OpenId,
                            IdentityServerConstants.StandardScopes.Profile,
                            "Inventory.APIAPI"
                        },

                        AllowAccessTokensViaBrowser = true,
                        RequireConsent = false,
                    });

                    //options.Clients.Add(new Client()
                    //{
                    //    ClientId = "angular",
                    //    ClientName = "Angular app",
                    //    RequireClientSecret = false,
                    //    AllowedGrantTypes = GrantTypes.Implicit,
                    //    AllowAccessTokensViaBrowser = true,
                    //    AllowOfflineAccess = true,
                    //    AccessTokenType = AccessTokenType.Jwt,
                    //    // TODO
                    //    // AccessTokenLifetime = 10,
                    //    RefreshTokenUsage = TokenUsage.OneTimeOnly,
                    //    AllowedScopes = new List<string>() {
                    //        IdentityServerConstants.StandardScopes.OpenId,
                    //        IdentityServerConstants.StandardScopes.Profile,
                    //        "Inventory.APIAPI"
                    //    },
                    //    // TODO: Configurable
                    //    AllowedCorsOrigins = new List<string>() { "http://localhost:4200" },
                    //    RedirectUris = new List<string>() { "http://localhost:4200/auth/oidc-callback" }
                    //});

                    //options.Clients.AddSPA("angular", options =>
                    //{
                    //    options.WithRedirectUri("http://localhost:4200/auth/oidc-callback");
                    //    options.WithLogoutRedirectUri("http://localhost:4200");
                    //    options.WithoutClientSecrets();
                    //    options.WithScopes(
                    //        IdentityServerConstants.StandardScopes.OpenId,
                    //        IdentityServerConstants.StandardScopes.Profile,
                    //        "Inventory.APIAPI"
                    //    );
                    //});
                });

            services.AddTransient<IDateTime, DateTimeService>();
            services.AddTransient<IIdentityService, IdentityService>();
            services.AddTransient<ICsvFileBuilder, CsvFileBuilder>();

            // Email service
            string emailServiceProvider = configuration.GetSection("EmailService")
                                                       .GetValue<string>("Provider");
            switch (emailServiceProvider)
            {
                case "SendGrid":
                    services.AddTransient<IEmailService, SendGridService>();
                    break;
            }

            services.AddAuthentication()
                .AddIdentityServerJwt();

            return services;
        }
    }
}
