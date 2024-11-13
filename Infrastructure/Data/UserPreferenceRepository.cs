using Core.Entities;
using Core.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data;

public class UserPreferenceRepository(StoreContext context) : IUserPreferenceRepository
{
    public void AddorUpdateUserPreference(UserPreference userPreference)
    {
        context.UserPreferences.Add(userPreference);
    }

    public bool UserPreferenceExists(string id)
    {
        return context.UserPreferences.Any(x => x.AppUserID.Id == id);
    }

    public async Task<bool> SaveChangesAsync()
    {
        return await context.SaveChangesAsync() > 0;
    }
}
