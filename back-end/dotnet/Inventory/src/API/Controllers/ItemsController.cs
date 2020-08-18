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
        public async Task<ActionResult<List<ItemDto>>> Get()
        {
            return await Mediator.Send(new GetItemsQuery());
        }
    }
}
