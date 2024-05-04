const myLibrary = [];
const library = document.getElementById('library');

function Book(title, author, numPages, isRead) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.isRead = isRead;
  this.info = function () {
    return `${book.title} by ${book.author}, ${book.numPages} pages, ${read(book.isRead)}`;
  };


}

function read(bool) {
  if (bool) {
    return "has been read";
  } else {
    return "not yet read";
  }
}

function addBookToLibrary(book) {
  myLibrary.unshift(book)
}

const theHobbit = new Book("The Hobbit", "J.R.R Tolkein", 295, false);
addBookToLibrary(theHobbit)
addBookToLibrary(theHobbit)
addBookToLibrary(theHobbit)

const displayLibrary = () =>{
  for (let index = 0; index < myLibrary.length; index++) {
    createCard(myLibrary[index]);
    
  }

}

const createCard = (book , index) =>{
  const card = document.createElement('div');
  const pic = document.createElement('div');
  const info = document.createElement('div');
  const bookTitle = document.createElement('h4')
  const bookAuthor = document.createElement('p')
  const bookPages = document.createElement('p')
  const bookRead = document.createElement('input')
  const bookReadLabel = document.createElement('label')
  const removebtn = document.createElement('button')
  card.classList.add('card');
  pic.classList.add('pic');
  info.classList.add('info');
  bookTitle.innerText = book.title;
  bookAuthor.innerText = book.author;
  bookPages.innerText = book.pages;
  bookRead.type = 'checkbox';
  bookRead.id = index
  bookReadLabel.htmlFor = index
  bookReadLabel.innerText = 'finished';
  removebtn.innerText ='Remove'
  
  info.appendChild(bookTitle);
  info.appendChild(bookAuthor);
  info.appendChild(bookPages);
  info.appendChild(bookRead);
  info.appendChild(bookReadLabel);
  info.appendChild(removebtn);
  card.appendChild(pic);
  card.appendChild(info);
  library.appendChild(card)
}

displayLibrary()