using Inventory.Application.Common.Interfaces;
using System;

namespace Inventory.Infrastructure.Services
{
    public class DateTimeService : IDateTime
    {
        public DateTime Now => DateTime.Now;
    }
}
