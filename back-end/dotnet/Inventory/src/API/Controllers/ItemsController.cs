using Inventory.Application.Items.Commands.CreateItem;
using Inventory.Application.Items.Queries.GetItems;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Inventory.API.Controllers
{
    [Authorize]
    public class ItemsController : ApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<ItemDto>>> GetItems()
        {
            return await Mediator.Send(new GetItemsQuery());
        }

        [HttpPost]
        public async Task<IActionResult> CreateItem([FromBody] CreateItemDto createItemDto)
        {
            CreateItemCommand command = new CreateItemCommand()
            {
                Name = createItemDto.Name,
                Description = createItemDto.Description,
                ItemTypeId = createItemDto.ItemTypeId,
                PurchaseDate = createItemDto.PurchaseDate,
                PurchasePrice = createItemDto.PurchasePrice,
                ExpirationDate = createItemDto.ExpirationDate,
                LastUsed = createItemDto.LastUsed
            };

            await Mediator.Send(command);

            return Ok();
        }
    }
}
