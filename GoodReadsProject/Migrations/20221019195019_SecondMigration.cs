using Microsoft.EntityFrameworkCore.Migrations;

namespace GoodReadsProject.Migrations
{
    public partial class SecondMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Book_BookRating_RatingId",
                table: "Book");

            migrationBuilder.DropForeignKey(
                name: "FK_BookRating_Book_BookId",
                table: "BookRating");

            migrationBuilder.DropIndex(
                name: "IX_BookRating_BookId",
                table: "BookRating");

            migrationBuilder.DropIndex(
                name: "IX_Book_RatingId",
                table: "Book");

            migrationBuilder.DropColumn(
                name: "BookId",
                table: "BookRating");

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

        protected override void Down(MigrationBuilder migrationBuilder)
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

            migrationBuilder.AddColumn<int>(
                name: "BookId",
                table: "BookRating",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_BookRating_BookId",
                table: "BookRating",
                column: "BookId");

            migrationBuilder.CreateIndex(
                name: "IX_Book_RatingId",
                table: "Book",
                column: "RatingId");

            migrationBuilder.AddForeignKey(
                name: "FK_Book_BookRating_RatingId",
                table: "Book",
                column: "RatingId",
                principalTable: "BookRating",
                principalColumn: "RatingId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_BookRating_Book_BookId",
                table: "BookRating",
                column: "BookId",
                principalTable: "Book",
                principalColumn: "BookId",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
