import { Book } from "./Bookexercise3";
import { Library } from "./libraryexercise3";
 
const myLibrary = new Library();
const book1 = new Book('The God Of Small Things', 'The God Of Small Things', '9780547928227');
const book2 = new Book('Clean Code', 'Robert Martin', '9780132350884', false);
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.listBooks();
myLibrary.removeBook('9780547928227');
myLibrary.listBooks();