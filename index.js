const addButton = document.querySelector("#showDialog");
const bookDialog = document.querySelector("#newBook");
const outputBox = document.querySelector("output");
const bookName = bookDialog.querySelector("#bookName");
const confirmBtn = bookDialog.querySelector("#confirmBtn");

// "Show the dialog" button opens the <dialog> modally
addButton.addEventListener("click", () => {
  bookDialog.showModal();
});

// "Favorite animal" input sets the value of the submit button
bookName.addEventListener("change", (e) => {
  confirmBtn.value = bookName.value;
});

// "Cancel" button closes the dialog without submitting because of [formmethod="dialog"], triggering a close event.
bookDialog.addEventListener("close", (e) => {
  outputBox.value =
    bookDialog.returnValue === "default"
      ? "No return value."
      : `ReturnValue: ${bookDialog.returnValue}.`; // Have to check for "default" rather than empty string
});

// Prevent the "confirm" button from the default behavior of submitting the form, and close the dialog with the `close()` method, which triggers the "close" event.
confirmBtn.addEventListener("click", (event) => {
  event.preventDefault(); // We don't want to submit this fake form
  bookDialog.close(bookName.value); // Have to send the select box value here.
});


const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.report = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
}

let book1 = new Book('The Hobbit', 'J.R.R Tolkein', '294', 'read');

console.log(book1.report());



const button = document.querySelector("button");
button.addEventListener('click', press);


function press() {
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
    input.focus();
}