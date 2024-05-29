const myLibrary = [];
const library = document.getElementById('library');
const dataEntry = document.getElementById('data');

function Book(title, author, numPages, isRead) {
  this.id = 0;
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.isRead = isRead;
  this.info = function () {
    return `${book.title} by ${book.author}, ${book.numPages} pages, ${read(book.isRead)}`;
  };
  this.setId = function(id){
    this.id = id;
  }
  this.changeRead = function(){
    this.isRead = !this.isRead;
  }
}

const read = (isRead) =>{
  if (isRead) {
    return 'the book has been read'
  } else {
    return 'the book has not been read'
  }
}

const handleAddBook = () => {

}


const toggleForm = () =>{
  dataEntry.classList.toggle('active')
}














const calculateNextId = () =>{
  const libraryLength = myLibrary.length;
  const lastItem = myLibrary[libraryLength-1]
  const newId = lastItem.id + 1;
}



const createCard = (book) =>{
  
}


const btn = document.querySelector('button')
btn.innerText; 

const readbtn = (e) =>{
  const btn = e.target;
  btn.classList.toggle('not');
  if (btn.textContent === 'read') {
    btn.innerText = 'not read'
    console.log('the book has been unread')
  } else {
    btn.innerText = 'read'
    console.log('the book has now been read')
  }
}