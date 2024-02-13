//DOM Elements
const addButton = document.querySelector("#showDialog");
const bookDialogue = document.querySelector("#newBook");
const outputBox = document.querySelector("output");
const bookTitle = bookDialogue.querySelector("#bookTitle");
const bookAuthor = bookDialogue.querySelector("#bookAuthor");
const bookYear = bookDialogue.querySelector("#bookYear");
const bookRead = bookDialogue.querySelector("#bookRead");
const confirmBtn = bookDialogue.querySelector("#confirmBtn");
const bookList = document.querySelector(".page-layout")
let myLibrary = [];

function Book(title, author, year, finished) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.finished = finished;
}

// "Show the dialog" button opens the <dialog> modally
addButton.addEventListener("click", () => {
  bookDialogue.showModal();
});

confirmBtn.addEventListener("click", e => {
    e.preventDefault() //stops form from submitting
    let title = bookTitle.value;
    let author = bookAuthor.value;
    let year = bookYear.value;
    let finished = bookRead.value;
    let newBook = new Book(title, author, year, finished)
    myLibrary += newBook
    displayBook(newBook)
    clearInput()
    bookDialogue.close()
})

// "Cancel" button closes the dialog without submitting because of [formmethod="dialog"], triggering a close event.
bookDialogue.addEventListener("close", (e) => {
  bookDialogue.close()
});

// creates book object and appends it to the body
function displayBook(newBook) {
    let bookDiv = document.createElement("div");
    bookDiv.classList.add("book");
    let divBookTitle = document.createElement("h2");
    let divBookAuthor = document.createElement("h4");
    let divBookYear = document.createElement("p");
    let divBookFinished = document.createElement("p");
    divBookTitle.classList.add("title")
    divBookAuthor.classList.add("author")
    divBookYear.classList.add("year")
    divBookFinished.classList.add("finished")
    bookDiv.appendChild(divBookTitle);
    bookDiv.appendChild(divBookAuthor);
    bookDiv.appendChild(divBookYear);
    bookDiv.appendChild(divBookFinished);
    divBookTitle.textContent = newBook.title;
    divBookAuthor.textContent = `by ${newBook.author}`;
    divBookYear.textContent = `Written in ${newBook.year}`;
    divBookFinished.textContent = newBook.finished;
    bookList.appendChild(bookDiv)
}

// clears input fields after submit
function clearInput() {
    bookTitle.value = "";
    bookAuthor.value = "";
    bookYear.value = "";
    //switchToggle.checked = false;
}