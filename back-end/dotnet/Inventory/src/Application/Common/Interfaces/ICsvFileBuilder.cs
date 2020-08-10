using Inventory.Application.TodoLists.Queries.ExportTodos;
using System.Collections.Generic;

namespace Inventory.Application.Common.Interfaces
{
    public interface ICsvFileBuilder
    {
        byte[] BuildTodoItemsFile(IEnumerable<TodoItemRecord> records);
    }
}
