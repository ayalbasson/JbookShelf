var books = [];

console.log("Welcome");
$(document).ready(function(){
  $(".addBookForm button").on("click", function(){
    var newBook = {};
    newBook.bookName = $(".addBookForm input:nth(0)").val();
    newBook.authorName = $(".addBookForm input:nth(1)").val();
    newBook.score = $(".addBookForm input:nth(2)").val();
    //console.log(newBook);
    var newLi = $("<li>");
    var nameSpan = $("<span>");
    nameSpan.html(newBook.bookName);
    var authorSpan = $("<span>");
    authorSpan.html(newBook.authorName);
    var scoreSpan = $("<span>");
    scoreSpan.html(newBook.score);
    newLi.append(nameSpan).append(authorSpan).append(scoreSpan);
    $("ul").append(newLi);
    books.push(newBook);
  });
});
