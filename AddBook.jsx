import React, { useState } from "react";
import axios from "axios";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");

  const handleAddBook = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://library-backend-1-9l4b.onrender.com/api/books", {
        title, author, genre, year,
      });
      console.log(response.data);
    } catch (error) {
      console.error("Error adding book", error);
    }
  };

  return (
    <form onSubmit={handleAddBook}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
      <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" required />
      <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} placeholder="Genre" required />
      <input type="number" value={year} onChange={(e) => setYear(e.target.value)} placeholder="Year" required />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBook;
