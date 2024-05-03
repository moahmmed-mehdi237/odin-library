const myLibrary = [];

function Book(title, author, numPages, isRead) {
  this.name = title;
  this.author = author;
  this.numPages = numPages;
  this.isRead = isRead;
  this.info = function () {
    return `${title} by ${author}, ${numPages} pages, ${read(isRead)}`;
  };

  function read(bool) {
    if (bool) {
      return "has been read";
    } else {
      return "not yet read";
    }
  }
}

function addBookToLibrary(book) {
  myLibrary.unshift(book)
}

const theHobbit = new Book("The Hobbit", "J.R.R Tolkein", 295, false);
