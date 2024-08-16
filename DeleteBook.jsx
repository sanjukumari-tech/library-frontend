import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const DeleteBook = () => {
  const { id } = useParams();

  const handleDeleteBook = async () => {
    try {
      const response = await axios.delete(`https://library-backend-1-9l4b.onrender.com/api/books/${id}`);
      console.log("Book deleted:", response.data);
    } catch (error) {
      console.error("Error deleting book", error);
    }
  };

  return (
    <div>
      <button onClick={handleDeleteBook}>Delete Book</button>
    </div>
  );
};

export default DeleteBook;
