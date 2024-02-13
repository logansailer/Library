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
    e.preventDefault()

    let title = bookTitle.value;
    let author = bookAuthor.value;
    let year = bookYear.value;
    let finished = bookRead.value;

    let newBook = new Book(title, author, year, finished)
    myLibrary = [...myLibrary, newBook]
    displayBook()

    bookDialogue.close()
})


// "Cancel" button closes the dialog without submitting because of [formmethod="dialog"], triggering a close event.
bookDialogue.addEventListener("close", (e) => {
  bookDialogue.close()
});


function displayBook() {
    let bookDiv = document.createElement("div");
    bookDiv.classList.add("book");

    let divBookTitle = document.createElement("h3");
    let divBookAuthor = document.createElement("h4");
    let divBookYear = document.createElement("p");
    let divBookFinished = document.createElement("p");

    bookDiv.appendChild(divBookTitle);
    bookDiv.appendChild(divBookAuthor);
    bookDiv.appendChild(divBookYear);
    bookDiv.appendChild(divBookFinished);

    divBookTitle.textContent = Book.title;
    divBookAuthor.textContent = Book.author;
    divBookYear.textContent = Book.year;
    divBookFinished.textContent = Book.finished;

    console.log(divBookTitle)
    bookList.appendChild(bookDiv)
    
    //let inputText = input.value;
    //input.value = "";
    //let li = document.createElement("li");
    //let spanText = document.createElement("span");
    //let deleteButton = document.createElement("button")
    //li.appendChild(spanText);
    //li.appendChild(deleteButton);
    //spanText.textContent = inputText;
    //deleteButton.textContent = "Delete"
    //list.appendChild(li);
    //deleteButton.addEventListener('click', () => {
    //    list.removeChild(li);
    //});
}