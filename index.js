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