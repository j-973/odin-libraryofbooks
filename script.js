let library = [];

//class with a constructor to define the properties of a book to be added to the library array.
//toggleReadStatus is a method for any instance of the Book class
class Book {
  constructor(title, authorFirst, authorLast, genre, publishDate, numPages, readStatus) {
    this.title = title;
    this.authorFirst = authorFirst;
    this.authorLast = authorLast;
    this.genre = genre;
    this.publishDate = publishDate;
    this.numPages = numPages;
    this.readStatus = readStatus;
  }
  toggleReadStatus() {
    if (this.readStatus === "Yes") {
      this.readStatus = "No";
    }
    else {
      this.readStatus = "Yes";
    }
  }
}

let wrapper = document.getElementById('wrapper');

createCard = (book) => {
  let card = document.createElement('div'),
    cardText = document.createElement('div');
  card.appendChild(cardText);

  card.classList.add('card');
  cardText.classList.add('card-text');

  let title = document.createElement('h2'),
    author = document.createElement('p'),
    genre = document.createElement('p'),
    publishDate = document.createElement('p'),
    numPages = document.createElement('p'),
    readStatus = document.createElement('p'),
    btnRemoveBook = document.createElement('button'),
    btnToggleReadStatus = document.createElement('button');

    //setting a data attribute on the card HTML element that stores the index number of the book card being created
    card.dataset.bookIndexNum = library.indexOf(book);

  title.textContent = book.title;
  cardText.appendChild(title);

  author.textContent = `Author: ${book.authorFirst} ${book.authorLast}`;
  cardText.appendChild(author);

  genre.textContent = `Genre: ${book.genre}`;
  cardText.appendChild(genre);

  publishDate.textContent = `Publish Date: ${book.publishDate}`;
  cardText.appendChild(publishDate);

  numPages.textContent = `Number of Pages: ${book.numPages}`;
  cardText.appendChild(numPages);

  readStatus.textContent = `Book Read?: ${book.readStatus}`;
  cardText.appendChild(readStatus);

  btnRemoveBook.textContent = `Remove ${book.title} from Library`;
  cardText.appendChild(btnRemoveBook);
  btnRemoveBook.addEventListener("click", removeBookFromLibrary);

    handleReadToggle = () => {
      book.toggleReadStatus();
      readStatus.textContent = `Book Read?: ${book.readStatus}`;
    }

  btnToggleReadStatus.textContent = `Mark ${book.title} as Read/Unread`;
  cardText.appendChild(btnToggleReadStatus);
  btnToggleReadStatus.addEventListener("click", handleReadToggle);

  return card;
}

createCardsFromLibrary = () => {
  for (let i = 0; i < library.length; i++) {
    let book = library[i];
    let card = createCard(book);
    wrapper.appendChild(card);
  }
}

createBookForm = () => {
  let bookForm = document.createElement('form');
  bookForm.setAttribute('class', 'card');

  let titleInput = document.createElement('input');
  titleInput.setAttribute('type', 'text');
  titleInput.setAttribute('placeholder', 'Title');
  bookForm.appendChild(titleInput);

  let authorFirstInput = document.createElement('input');
  authorFirstInput.setAttribute('type', 'text');
  authorFirstInput.setAttribute('placeholder', 'Author First Name');
  bookForm.appendChild(authorFirstInput);

  let authorLastInput = document.createElement('input');
  authorLastInput.setAttribute('type', 'text');
  authorLastInput.setAttribute('placeholder', 'Author Last Name');
  bookForm.appendChild(authorLastInput);

  let genreInput = document.createElement('input');
  genreInput.setAttribute('type', 'text');
  genreInput.setAttribute('placeholder', 'Genre');
  bookForm.appendChild(genreInput);

  let publishDateInput = document.createElement('input');
  publishDateInput.setAttribute('type', 'date');
  publishDateInput.setAttribute('placeholder', 'Publish Date (mm/dd/yyyy)');
  bookForm.appendChild(publishDateInput);

  let numPagesInput = document.createElement('input');
  numPagesInput.setAttribute('type', 'number');
  numPagesInput.setAttribute('placeholder', '# of Pages');
  bookForm.appendChild(numPagesInput);

  let readStatusInput = document.createElement('input');
  let readStatusLabel = document.createElement('label');
  readStatusInput.setAttribute('type', 'checkbox');
  readStatusLabel.textContent = 'Book read?:'
  bookForm.appendChild(readStatusLabel);
  readStatusLabel.appendChild(readStatusInput);

  let submitButton = document.createElement('button');
  submitButton.textContent = 'Add New Book';
  bookForm.appendChild(submitButton);

  wrapper.appendChild(bookForm);

  bookForm.addEventListener('submit', addBookToLibrary);
}

removeBookFromLibrary = (ev) => {
  const NUM_TO_REMOVE = 1;

  //sets a reference to the remove button that triggers this function on click
  let btnRemoveBook = ev.target;

  //.closest goes up the DOM to find the .card element nearest to the remove button, which we want to remove
  let card = btnRemoveBook.closest('.card');

  let bookIndexNum = parseInt(card.dataset.bookIndexNum);
  library.splice(bookIndexNum, NUM_TO_REMOVE);
  card.remove();
}

addBookToLibrary = (ev) => {
  //prevent the default behavior of submitting the form to a server, and get the value of each of the form's inputs based on their unique attributes. 
  ev.preventDefault();

  //sets a reference to the target (the book form) that triggered the submit event
  let bookForm = ev.target;

  let title = bookForm.querySelector('[placeholder="Title"]').value,
      authorFirst = bookForm.querySelector('[placeholder="Author First Name"]').value,
      authorLast = bookForm.querySelector('[placeholder="Author Last Name"]').value,
      genre = bookForm.querySelector('[placeholder="Genre"]').value,
      publishDate = bookForm.querySelector('[type="date"]').value,
      numPages = bookForm.querySelector('[placeholder="# of Pages"]').value,
      readStatus = bookForm.querySelector('[type="checkbox"]').checked;
        readStatus = readStatus ? "Yes" : "No";

    let book = new Book(title, authorFirst, authorLast, genre, publishDate, numPages, readStatus);
    library.push(book);

    bookForm.remove();

    let card = createCard(book);
    wrapper.appendChild(card);
}

btnNewBook = document.getElementById('new-book');
btnNewBook.addEventListener("click", createBookForm);