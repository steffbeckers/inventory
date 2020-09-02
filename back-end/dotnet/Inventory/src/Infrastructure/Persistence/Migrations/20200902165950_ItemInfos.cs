using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Inventory.Infrastructure.Persistence.Migrations
{
    public partial class ItemInfos : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ExpirationDate",
                table: "Items");

            migrationBuilder.DropColumn(
                name: "PurchaseDate",
                table: "Items");

            migrationBuilder.DropColumn(
                name: "PurchasePrice",
                table: "Items");

            migrationBuilder.CreateTable(
                name: "ItemInfos",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    CreatedBy = table.Column<string>(nullable: true),
                    Created = table.Column<DateTime>(nullable: false),
                    LastModifiedBy = table.Column<string>(nullable: true),
                    LastModified = table.Column<DateTime>(nullable: true),
                    PurchaseDate = table.Column<DateTime>(nullable: true),
                    PurchasePrice = table.Column<double>(nullable: true),
                    ExpirationDate = table.Column<DateTime>(nullable: true),
                    LastUsed = table.Column<DateTime>(nullable: true),
                    ItemId = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ItemInfos", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ItemInfos_Items_ItemId",
                        column: x => x.ItemId,
                        principalTable: "Items",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ItemInfos_ItemId",
                table: "ItemInfos",
                column: "ItemId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ItemInfos");

            migrationBuilder.AddColumn<DateTime>(
                name: "ExpirationDate",
                table: "Items",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "PurchaseDate",
                table: "Items",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<double>(
                name: "PurchasePrice",
                table: "Items",
                type: "float",
                nullable: true);
        }
    }
}
