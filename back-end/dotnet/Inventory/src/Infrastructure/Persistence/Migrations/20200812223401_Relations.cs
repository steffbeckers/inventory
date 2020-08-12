using Microsoft.EntityFrameworkCore.Migrations;

namespace Inventory.Infrastructure.Persistence.Migrations
{
    public partial class Relations : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_RelatedItems_Items_RelatedId",
                table: "RelatedItems");

            migrationBuilder.AddForeignKey(
                name: "FK_RelatedItems_Items_RelatedId",
                table: "RelatedItems",
                column: "RelatedId",
                principalTable: "Items",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_RelatedItems_Items_RelatedId",
                table: "RelatedItems");

            migrationBuilder.AddForeignKey(
                name: "FK_RelatedItems_Items_RelatedId",
                table: "RelatedItems",
                column: "RelatedId",
                principalTable: "Items",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
