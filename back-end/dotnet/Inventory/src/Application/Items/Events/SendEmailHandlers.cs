using Inventory.Application.Common.Interfaces;
using Inventory.Domain.Events;
using MediatR;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Inventory.Application.Items.Events
{
    public class SendEmailHandlers : INotificationHandler<ItemCreatedEvent>
    {
        private readonly IEmailService _emailService;

        public SendEmailHandlers(IEmailService emailService)
        {
            _emailService = emailService;
        }

        public async Task Handle(ItemCreatedEvent notification, CancellationToken cancellationToken)
        {
            await _emailService.SendEmailAsync(
                email: "steff@steffbeckers.eu",
                subject: "Inventory - New item created",
                htmlMessage: notification.Item.Name
            );
        }
    }
}
