import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`https://library-backend-1-9l4b.onrender.com/api/books/${id}`);
        setBook(response.data);
      } catch (error) {
        console.error("Error fetching book details", error);
      }
    };
    fetchBook();
  }, [id]);

  return (
    <div>
      {book ? (
        <div>
          <h2>{book.title}</h2>
          <p>Author: {book.author}</p>
          <p>Genre: {book.genre}</p>
          <p>Year: {book.year}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BookDetails;
