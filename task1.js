class Library {
  #books = [];
  get allBooks() {
    return this.#books;
  }
  addBook(title) {
    try {
      if (this.#books.includes(title)) {
        throw new Error(`Книга ${title} уже есть в библиотеке!`);
      } else {
        this.#books.push(title);
      }
    } catch (error) {
      console.log(error);
    }
  }
  removeBook(title) {
    try {
      if (this.#books.includes(title)) {
        const booksModified = [];
        this.#books.forEach((element) => {
          if (element !== title) {
            booksModified.push(element);
          }
        });
        this.#books = booksModified;
      } else {
        throw new Error(`Книги ${title} нет в библиотеке!`);
      }
    } catch (error) {
      console.log(error);
    }
  }
  hasBook(title) {
    try {
      if (this.#books.includes(title)) {
        return true;
      } else {
        throw new Error(`Книги ${title} нет в библиотеке!`);
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  }
  constructor(array) {
    try {
      const arrayWithoutCopies = [];
      array.forEach((element) => {
        if (arrayWithoutCopies.includes(element)) {
          throw new Error("В исходном массиве есть дубликаты");
        } else {
          arrayWithoutCopies.push(element);
        }
      });
      this.#books = arrayWithoutCopies;
    } catch (error) {
      console.log(error);
    }
  }
}

const books = ["War and Peace", "Beauty and Beast", "1984"];

const library = new Library(books);
console.log(library.allBooks);
library.addBook("Boy and Girls");
console.log(library.allBooks);
library.hasBook("1984");
console.log("До удаления");
console.log(library.allBooks);
library.removeBook("Old man");
console.log("после удаления");
console.log(library.allBooks);
