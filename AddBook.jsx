import React, { useState } from "react";
import axios from "axios";
// import "./AddBook.css"; // Import CSS for form and card styling

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const [books, setBooks] = useState([]); // Store added books

  const handleAddBook = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://library-backend-1-9l4b.onrender.com/api/books", {
        title,
        author,
        genre,
        year,
      });

      // Add the new book to the state
      setBooks([...books, response.data]);
      
      // Reset form fields
      setTitle("");
      setAuthor("");
      setGenre("");
      setYear("");

      console.log(response.data);
    } catch (error) {
      console.error("Error adding book", error);
    }
  };

  return (
    <div className="add-book-container">
      <form onSubmit={handleAddBook} className="add-book-form">
        <h2>Add a New Book</h2>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author"
          required
        />
        <input
          type="text"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          placeholder="Genre"
          required
        />
        <input
          type="number"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          placeholder="Year"
          required
        />
        <button type="submit" className="add-book-button">Add Book</button>
      </form>

      <div className="books-container">
        {books.length > 0 && <h3>Books Added:</h3>}
        <div className="books-grid">
          {books.map((book) => (
            <div className="book-card" key={book._id}>
              <h4>{book.title}</h4>
              <p><strong>Author:</strong> {book.author}</p>
              <p><strong>Genre:</strong> {book.genre}</p>
              <p><strong>Year:</strong> {book.year}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddBook;
