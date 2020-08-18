using AutoMapper;
using AutoMapper.QueryableExtensions;
using Inventory.Application.Common.Interfaces;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Inventory.Application.Items.Queries.GetItems
{
    public class GetItemsQuery : IRequest<List<ItemDto>>
    {
    }

    public class GetItemsQueryHandler : IRequestHandler<GetItemsQuery, List<ItemDto>>
    {
        private readonly IApplicationDbContext _context;
        private readonly IMapper _mapper;

        public GetItemsQueryHandler(IApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<List<ItemDto>> Handle(GetItemsQuery request, CancellationToken cancellationToken)
        {
            return await _context.Items
                    .ProjectTo<ItemDto>(_mapper.ConfigurationProvider)
                    .OrderBy(t => t.Name)
                    .ToListAsync(cancellationToken);
        }
    }
}
