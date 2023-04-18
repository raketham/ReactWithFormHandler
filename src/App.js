import { useState } from "react";
import BookCreate from "./HandleForms/BookCreate";
import BookList from "./HandleForms/BookList";

function App() {
 const [books, setBooks] = useState([]);
 const hanldeCreateBook = (title) =>{
   const updateBook = [...books,  {id:Math.round(Math.random()*9999),title}]

   setBooks(updateBook);
 }
 const editBookById = (id,newtitle) =>{
  const updateBooks = books.map((book)=>{
    
    if(book.id === id){
      return {...book, title:newtitle};
    }
    return book;

  });
  setBooks(updateBooks)
 }
 const deleteBookById = (id) =>{
  const updateBooks = books.filter((book)=>{
    return book.id !==id;
  });
  setBooks(updateBooks)
 }
  return (
    <div className="app">
      <h2>Reading List</h2>
      <BookList onEdit={editBookById} books = {books} onDelete={deleteBookById}/>
      <BookCreate onCreate={hanldeCreateBook}></BookCreate>
      
    </div>
  );
}

export default App;
