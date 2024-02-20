//DOM Elements
const addButton = document.querySelector("#showDialog");
const bookDialog = document.querySelector("#newBook");
const outputBox = document.querySelector("output");
const bookTitle = bookDialog.querySelector("#bookTitle");
const bookAuthor = bookDialog.querySelector("#bookAuthor");
const bookYear = bookDialog.querySelector("#bookYear");
const bookRead = bookDialog.querySelector("#bookRead");
const confirmBtn = bookDialog.querySelector("#confirmBtn");
const bookList = document.querySelector(".page-layout")
let myLibrary = [];

class Book {
    constructor(title, author, year, finished) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.finished = finished;
    }
}

// "Show the dialog" button opens the <dialog> modally
addButton.addEventListener("click", () => {
  bookDialog.showModal();
});

confirmBtn.addEventListener("click", e => {
    e.preventDefault() //stops form from submitting
    let title = bookTitle.value;
    let author = bookAuthor.value;
    let year = bookYear.value;
    let finished = bookRead.checked;
    let newBook = new Book(title, author, year, finished)
    displayBook(newBook)
    clearInput()
    bookDialog.close()
})

// "Cancel" button closes the dialog without submitting because of [formmethod="dialog"], triggering a close event.
bookDialog.addEventListener("close", (e) => {
  bookDialog.close()
});

// creates book object and appends it to the body
function displayBook(newBook) {
    //creates DOM elements
    let bookDiv = document.createElement("div");
    bookDiv.classList.add("book");
    let divBookTitle = document.createElement("h2");
    let divBookAuthor = document.createElement("h4");
    let divBookYear = document.createElement("p");
    let completedButton = document.createElement("button");
    let deleteButton = document.createElement("button")
    //adds class to DOM elements for later styling
    divBookTitle.classList.add("title")
    divBookAuthor.classList.add("author")
    divBookYear.classList.add("year")
    completedButton.classList.add("finished")
    bookDiv.appendChild(divBookTitle);
    bookDiv.appendChild(divBookAuthor);
    bookDiv.appendChild(divBookYear);
    bookDiv.appendChild(completedButton);
    bookDiv.appendChild(deleteButton);
    //adds text to book info
    divBookTitle.textContent = newBook.title;
    divBookAuthor.textContent = `by ${newBook.author}`;
    divBookYear.textContent = `Written in ${newBook.year}`;
    //buttons for delete and if read
    if (newBook.finished === true) {
        completedButton.textContent = "Completed";
    } else {
        completedButton.textContent = "Not Completed";
    }

    completedButton.addEventListener('click', () => {
        newBook.finished = !newBook.finished
        
        if (newBook.finished === true) {
            completedButton.textContent = "Not Completed";
        } else if (newBook.finished ===false) {
            completedButton.textContent = "Completed";
        }
    })

    deleteButton.textContent = "Delete"
    deleteButton.addEventListener('click', () => {
        bookList.removeChild(bookDiv);
    });

    // adds all of the above to the main Div element
    bookList.appendChild(bookDiv)
}

// clears input fields after submit
function clearInput() {
    bookTitle.value = "";
    bookAuthor.value = "";
    bookYear.value = "";
    bookRead.checked = false;
}