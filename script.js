let library = [];

//constructor function to define the properties of a book to be added to the library array.
function Book(title, authorFirst, authorLast, publishDate, genre) {
  this.title = title;
  this.authorFirst = authorFirst;
  this.authorLast = authorLast;
  this.publishDate = publishDate;
  this.genre = genre;
}

//after prompting the user for input information on the properties of a book, an instance of the book object is created with the 'new' keyword, and added to the library array with push().
function addBookToLibrary() {
    let title = prompt("What's the title of the book you want to add?:");
    let authorFirst = prompt("What's the book author's first name?:");
    let authorLast = prompt("What's the author's last name?:");
    let publishDate = prompt("When was the book published? Enter as mm/dd/yyyy:");
    let genre = prompt("What's the book's genre?:");
  
    let book = new Book(title, authorFirst, authorLast, publishDate, genre);
    library.push(book);

    console.log(library);
}

addBookToLibrary();


let wrapper = document.getElementById('wrapper');

//iterates throuh the library array. Each iteration makes a card, card text, and DOM elements for every property of a book.
//Text of DOM elements set to book properties with dot notation 
showBooks = () => {
  for (let i = 0; i < library.length; i++) {
    let book = library[i];
    let card = document.createElement('div'), 
        cardText = document.createElement('div');
    card.appendChild(cardText);

    card.classList.add('card');
    cardText.classList.add('card-text');

    let title = document.createElement('h2'),
      author = document.createElement('p'),
      publishDate = document.createElement('p'),
      genre = document.createElement('p');

    title.textContent = book.title;
    cardText.appendChild(title);

    author.textContent = `Author: ${book.authorFirst} ${book.authorLast}`;
    cardText.appendChild(author);

    publishDate.textContent = `Publish Date: ${book.publishDate}`;
    cardText.appendChild(publishDate);

    genre.textContent = `Genre: ${book.genre}`;
    cardText.appendChild(genre);

    wrapper.appendChild(card);
  }
}

showBooks();