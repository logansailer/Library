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

const myLibrary = [];

function Book(title, author, read, finished) {
    this.title = title;
    this.author = author;
    this.read = read;
    this.finished = finished;
}


// "Show the dialog" button opens the <dialog> modally
addButton.addEventListener("click", () => {
  bookDialogue.showModal();
});


confirmBtn.addEventListener("click", e => {
    e.preventDefault()

    const title = bookTitle.value;
    const author = bookAuthor.value;
    const year = bookYear.value;
    const finished = bookRead.value;

    let book = new Book(title, author, year, finished)
    myLibrary = [...myLibrary, book]
    displayBook()
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

    divBookTitle.textContent = 
    divBookAuthor.textContent = 
    divBookYEar.textContent = 
    divBookFinished.textContent = 

    bookList.appendChild(bookDiv)
    
    let inputText = input.value;
    input.value = "";
    let li = document.createElement("li");
    let spanText = document.createElement("span");
    let deleteButton = document.createElement("button")
    li.appendChild(spanText);
    li.appendChild(deleteButton);
    spanText.textContent = inputText;
    deleteButton.textContent = "Delete"
    list.appendChild(li);
    deleteButton.addEventListener('click', () => {
        list.removeChild(li);
    });
}



const button = document.querySelector("button");
button.addEventListener('click', press);