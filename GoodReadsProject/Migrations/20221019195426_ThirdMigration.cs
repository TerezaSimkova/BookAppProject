using Microsoft.EntityFrameworkCore.Migrations;

namespace GoodReadsProject.Migrations
{
    public partial class ThirdMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Book_BookRating_BookRatingRatingId",
                table: "Book");

            migrationBuilder.DropIndex(
                name: "IX_Book_BookRatingRatingId",
                table: "Book");

            migrationBuilder.DropColumn(
                name: "BookRatingRatingId",
                table: "Book");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "BookRatingRatingId",
                table: "Book",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Book_BookRatingRatingId",
                table: "Book",
                column: "BookRatingRatingId");

            migrationBuilder.AddForeignKey(
                name: "FK_Book_BookRating_BookRatingRatingId",
                table: "Book",
                column: "BookRatingRatingId",
                principalTable: "BookRating",
                principalColumn: "RatingId",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
