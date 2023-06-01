# odin-libraryofbooks

## Description
A small "library" app for adding and removing books to a larger list of books.

My iteration of this project adheres to the guidelines set out by the maintainers of **The Odin Project**, a self-paced curriculum for learning web development (links at the bottom).

**Why did I complete this project?:** To demonstrate my understanding of object constructors, prototypal inheritance, and prototypes in JavaScript.

## What I Learned
- Constructor functions are used to create many duplicate objects with properties in common. 
  - For a book, that could be book title, or an author's name, among other properties.
- The `this` keyword changes values depending on how it's invoked. 
  - Constructor function for making a book: `this` refers to the newly created book.
  - Prototype method to toggleReadStatus of a library book: `this` refers to the book object where the method is called. 
- Prototypes are incredibly useful in defining common properties and methods shared among a group of objects. 
  - In this small library app, all newly created books have the method to toggleReadStatus between "read" to "unread". Prototype methods only need to be defined once, and the many instances of the book all inherit this one method, which saves the need to define it again for each book.
- The `dataset` property allows you to read/write custom data attributes for HTML elements.
  - In the library app, dataset is used to link created book cards to their respective index value in the library array, storing that number in the custom attribute named `bookIndexNum`.
- Square brackets `[]` allow access to HTML/CSS attributes from JavaScript.
  - E.g. the `placeholder` or `type` attributes on an HTML form input.

### Sources
- Odin Project Full Stack JavaScript Path: https://www.theodinproject.com/paths/full-stack-javascript/
  - Odin Project "Intermediate" HTML and CSS Course: https://www.theodinproject.com/paths/full-stack-javascript/courses/intermediate-html-and-css
- Project Instructions: https://www.theodinproject.com/lessons/node-path-javascript-library