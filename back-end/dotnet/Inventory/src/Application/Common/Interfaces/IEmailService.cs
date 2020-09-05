using System.Threading.Tasks;

namespace Inventory.Application.Common.Interfaces
{
    public interface IEmailService
    {
        Task SendEmailAsync(string email, string subject, string htmlMessage);
    }
}
