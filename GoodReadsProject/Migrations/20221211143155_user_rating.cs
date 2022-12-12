using Microsoft.EntityFrameworkCore.Migrations;

namespace GoodReadsProject.Migrations
{
    public partial class user_rating : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "UserId",
                table: "BookRating",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_BookRating_UserId",
                table: "BookRating",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_BookRating_User_UserId",
                table: "BookRating",
                column: "UserId",
                principalTable: "User",
                principalColumn: "UserId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_BookRating_User_UserId",
                table: "BookRating");

            migrationBuilder.DropIndex(
                name: "IX_BookRating_UserId",
                table: "BookRating");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "BookRating");
        }
    }
}
