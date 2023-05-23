let library = [];

//constructor function to define the properties of a book to be added to the library array.
function Book(title, authorFirst, authorLast, genre, publishDate) {
  this.title = title;
  this.authorFirst = authorFirst;
  this.authorLast = authorLast;
  this.genre = genre;
  this.publishDate = publishDate;
}

//moved book card creation to its own function which returns a card.
//Can be called when adding a book to the library, or when creating cards from the existing books in the library array
createCard = (book) => {
  let card = document.createElement('div'),
    cardText = document.createElement('div');
  card.appendChild(cardText);

  card.classList.add('card');
  cardText.classList.add('card-text');

  let title = document.createElement('h2'),
    author = document.createElement('p'),
    genre = document.createElement('p'),
    publishDate = document.createElement('p');

  title.textContent = book.title;
  cardText.appendChild(title);

  author.textContent = `Author: ${book.authorFirst} ${book.authorLast}`;
  cardText.appendChild(author);

  genre.textContent = `Genre: ${book.genre}`;
  cardText.appendChild(genre);

  publishDate.textContent = `Publish Date: ${book.publishDate}`;
  cardText.appendChild(publishDate);

  return card;
}

createCardsFromLibrary = () => {
  for (let i = 0; i < library.length; i++) {
    let book = library[i];
    let card = createCard(book);
    wrapper.appendChild(card);
  }
}

//after prompting the user for input information on the properties of a book, an instance of the book object is created with the 'new' keyword, and added to the library array with push().
addBookToLibrary = () => {
    let title = prompt("What's the title of the book you want to add?:");
    let authorFirst = prompt("What's the book author's first name?:");
    let authorLast = prompt("What's the author's last name?:");
    let genre = prompt("What's the book's genre?:");
    let publishDate = prompt("When was the book published? Enter as mm/dd/yyyy:");
  
    let book = new Book(title, authorFirst, authorLast, genre, publishDate);
    library.push(book);

    let card = createCard(book);
    wrapper.appendChild(card);
}



let wrapper = document.getElementById('wrapper');

document.addEventListener("click", addBookToLibrary);