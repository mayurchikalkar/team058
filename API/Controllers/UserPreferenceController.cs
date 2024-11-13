using API.DTOs;
using API.RequestHelpers;
using Core.Entities;
using Core.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class UserPreferenceController(IUnitOfWork unit) : BaseApiController
    {
        [InvalidateCache("api/createorupdateuserpreference")]
        [HttpPost]
        public async Task<ActionResult<UserPreference>> CreateorUpdateUserPreference(UserPreference userPreference)
        {
            unit.Repository<UserPreference>().Add(userPreference);

            await unit.Complete();

            return BadRequest("Problem creating user preference");
        }

        //private bool UserPreferenceExists(string id)
        //{
        //    return unit.Repository<UserPreference>().Exists(id);
        //}
    }
}
