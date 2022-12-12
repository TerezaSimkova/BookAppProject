using Microsoft.EntityFrameworkCore.Migrations;

namespace GoodReadsProject.Migrations
{
    public partial class rating_config : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "RatingId",
                table: "Book");

            migrationBuilder.AddColumn<int>(
                name: "BookId",
                table: "BookRating",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_BookRating_BookId",
                table: "BookRating",
                column: "BookId");

            migrationBuilder.AddForeignKey(
                name: "FK_BookRating_Book_BookId",
                table: "BookRating",
                column: "BookId",
                principalTable: "Book",
                principalColumn: "BookId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_BookRating_Book_BookId",
                table: "BookRating");

            migrationBuilder.DropIndex(
                name: "IX_BookRating_BookId",
                table: "BookRating");

            migrationBuilder.DropColumn(
                name: "BookId",
                table: "BookRating");

            migrationBuilder.AddColumn<int>(
                name: "RatingId",
                table: "Book",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
