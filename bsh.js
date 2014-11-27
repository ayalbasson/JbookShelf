var books = [];

console.log("Welcome");
$(document).ready(function(){
  $(".addBookForm button").on("click", function(){
    var newBook = {};
    newBook.bookName = $(".addBookForm input:nth(0)").val();
    newBook.authorName = $(".addBookForm input:nth(1)").val();
    newBook.score = $(".addBookForm input:nth(2)").val();
    newBook.id = "book_" + new Date().getTime();
    //console.log(newBook);
    var newLi = $("<li>");
    newLi.attr("id", newBook.id);
    var nameSpan = $("<div>");
    nameSpan.html(newBook.bookName);
    var authorSpan = $("<div>");
    authorSpan.html(newBook.authorName);
    var scoreSpan = $("<div>");
    scoreSpan.html(newBook.score);
    var xSpan = $("<div>");
    xSpan.html("X");
    xSpan.on("click", function(){
      $("#" + newBook.id).remove();
    });
    newLi.append(nameSpan).append(authorSpan).append(scoreSpan);
    $("ul").append(newLi);
    books.push(newBook);
  });
});
