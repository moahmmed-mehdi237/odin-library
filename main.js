const myLibrary = [];
const library = document.getElementById("library");
const dataEntry = document.getElementById("data");
const bookTitleInput = document.getElementById("book-title");
const bookAuthorInput = document.getElementById("book-author");
const numPagesInput = document.getElementById("num-pages");

function Book(title, author, numPages, isRead) {
  this.id = 0;
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.isRead = isRead;
  this.info = function () {
    return `${this.id} :${this.title} by ${this.author}, ${
      this.numPages
    } pages, ${read(this.isRead)}`;
  };
  this.setId = function (id) {
    this.id = id;
  };
  this.changeRead = function () {
    this.isRead = !this.isRead;
  };
}

const read = (isRead) => {
  if (isRead) {
    return "the book has been read";
  } else {
    return "the book has not been read";
  }
};

const handleAddBook = () => {
  toggleForm();
  bookTitleInput.focus();
};

const handleAddBookDone = (e) => {
  e.preventDefault();
  if (!bookTitleInput.value || !bookAuthorInput.value || !numPagesInput.value) {
    alert("there is some invalid data in your entry so it will not be added");
  } else {
    toggleForm();
    const newBook = new Book(
      bookTitleInput.value,
      bookAuthorInput.value,
      numPagesInput.value,
      false
    );
    newBook.setId(calculateNextId());
    addToLibrary(newBook);
    createCard(newBook);
    clearInputs();
    console.log(newBook.info());
    console.log(myLibrary);
  }
};

const toggleForm = () => {
  dataEntry.classList.toggle("active");
};

const addToLibrary = (book) => {
  myLibrary.push(book);
};

const removebtn = (e) => {
  const cardId = e.target.parentElement.id;
  for (let i = 0; i < myLibrary.length; i++) {
    if (myLibrary[i].id == cardId) {
      myLibrary.splice(i, 1);
      e.target.parentElement.remove();
      break;
    }
  }
};

const calculateNextId = () => {
  const libraryLength = myLibrary.length;
  if (libraryLength === 0) {
    return 1;
  }
  const lastItem = myLibrary[libraryLength - 1];
  return lastItem.id + 1;
};

const btn = document.querySelector("button");
btn.innerText;

const readbtn = (e) => {
  const cardId = e.target.parentElement.id;
  for (let i = 0; i < myLibrary.length; i++) {
    if (myLibrary[i].id == cardId) {
      myLibrary[i].isRead = !myLibrary[i].isRead;
      console.log(myLibrary[i].info());
      break;
    }
  }

  const btn = e.target;
  btn.classList.toggle("not");
  if (btn.textContent === "read") {
    btn.innerText = "not read";
    console.log("the book has been unread");
  } else {
    btn.innerText = "read";
    console.log("the book has now been read");
  }
};

const createCard = (book) => {
  const container = document.createElement("div");
  container.classList.add("card");
  const booktitle = document.createElement("p");
  booktitle.innerText = book.title;
  container.appendChild(booktitle);

  const bookauthor = document.createElement("p");
  bookauthor.innerText = book.author;
  container.appendChild(bookauthor);

  const booknumpages = document.createElement("p");
  booknumpages.innerText = book.numPages;
  container.appendChild(booknumpages);

  const readbutton = document.createElement("button");
  readbutton.classList.add("colour", "not", "read");
  container.appendChild(readbutton);
  readbutton.addEventListener("click", readbtn);
  readbutton.innerText = "not read";

  const removebutton = document.createElement("button");
  container.appendChild(removebutton);
  removebutton.addEventListener("click", removebtn);
  removebutton.innerText = "remove";

  container.id = book.id;
  library.appendChild(container);
};

const clearInputs = () => {
  bookAuthorInput.value = "";
  bookTitleInput.value = "";
  numPagesInput.value = "";
};

const displayLibrary = () => {
  myLibrary.forEach((book) => {
    createCard(book);
  });
};

displayLibrary();
