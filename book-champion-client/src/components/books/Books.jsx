import BookItem from "../bookItem/BookItem";
import BookSearch from "../boockSearch/BookSearch";
import { useState } from "react";
const Books = ({ books }) => {
  const [selectedTitle, setSelectedTitle] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const filteredBooks = books.filter((book) => {
    return book.bookTitle.toLowerCase().includes(searchValue.toLowerCase());
  });

  const handleSelect = (title) => {
    setSelectedTitle(title);
  };

  return (
    <>
      {selectedTitle && (
        <p>
          El libro seleccionado es:
          <span className="fw-bold">{selectedTitle}</span>
        </p>
      )}

      <BookSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="d-flex justify-content-center flex-wrap">
        {filteredBooks.map((book) => (
          <BookItem
            key={book.id}
            title={book.bookTitle}
            author={book.bookAuthor}
            rating={book.bookRating.length}
            pageCount={book.pageCount}
            imageUrl={book.imageUrl}
            available={book.available}
            onSelect={handleSelect}
          />
        ))}
      </div>
    </>
  );
};

export default Books;
