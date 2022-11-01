﻿
using GoodReadsProject.Services.GoodReadsProjectCore.BusinessLayer;
using GoodReadsProject.Services.GoodReadsProjectCore.Models;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace GoodReadsProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticateController : ControllerBase
    {
        //private readonly BusinessLayer userManager;
        private readonly UserManager<ApplicationUser> userManagerAuth;
        private readonly IConfiguration _configuration;

        public AuthenticateController(UserManager<ApplicationUser> userAuth, IConfiguration configuration)
        {
            //userManager = mainBusinessLayer;
            userManagerAuth = userAuth;
            _configuration = configuration;
        }

        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> Login([FromBody] LoginModel model)
        {
            //var user = await userManager.GetUserByUsernameAndPassword(model.Username,model.Password);
            var user = await userManagerAuth.FindByNameAsync(model.Username);
            var userAuth = await userManagerAuth.CheckPasswordAsync(user, model.Password);
            if (user != null && userAuth)
            {
                var userRoles = await userManagerAuth.GetRolesAsync(user);

                var authClaims = new List<Claim>
                {
                    new Claim(ClaimTypes.Name, user.UserName),
                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                };

                foreach (var userRole in userRoles)
                {
                    authClaims.Add(new Claim(ClaimTypes.Role, userRole));
                }

                var authSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWT:Secret"]));

                var token = new JwtSecurityToken(
                    issuer: _configuration["JWT:ValidIssuer"],
                    audience: _configuration["JWT:ValidAudience"],
                    expires: DateTime.Now.AddHours(3),
                    claims: authClaims,
                    signingCredentials: new SigningCredentials(authSigningKey, SecurityAlgorithms.HmacSha256)
                    );

                return Ok(new
                {
                    token = new JwtSecurityTokenHandler().WriteToken(token),
                    expiration = token.ValidTo
                });
            }
            return Unauthorized();
        }

        [HttpPost]
        [Route("register")]
        public async Task<IActionResult> Register([FromBody] RegisterModel model)
        {
            //var userExists = await userManager.GetUserByUsernameAndPassword(model.Username, model.Password);
            var userExists = await userManagerAuth.FindByNameAsync(model.Username);
            if (userExists != null)
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "User already exists!" });

            //var user = new User()
            //{
            //    Name = model.Name,
            //    Surname = model.Surname,
            //    Age = model.Age,
            //    DateOfBirth = model.DateOfBirth,
            //    PersonalDescription = model.PersonalDescription,
            //    Address = model.Address,
            //    Password = model.Password
            //};
            //var result = await userManager.CreateUser(user);
            ApplicationUser user = new ApplicationUser()
            {
                Email = model.Email,
                SecurityStamp = Guid.NewGuid().ToString(),
                UserName = model.Username
            };
            var result = await userManagerAuth.CreateAsync(user, model.Password);
            if (!result.Succeeded)
                return StatusCode(StatusCodes.Status500InternalServerError, new Response { Status = "Error", Message = "User creation failed! Please check user details and try again." });

            return Ok(new Response { Status = "Success", Message = "User created successfully!" });
        }

    }
}

