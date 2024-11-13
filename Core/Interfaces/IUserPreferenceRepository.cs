using Core.Entities;

namespace Core.Interfaces;

public interface IUserPreferenceRepository
{
    void AddorUpdateUserPreference(UserPreference userPreference);
    bool UserPreferenceExists(string id);
    Task<bool> SaveChangesAsync();
}
