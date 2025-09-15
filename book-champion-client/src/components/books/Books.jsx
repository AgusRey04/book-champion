import BookItem from "../bookItem/BookItem";
import BookSearch from "../boockSearch/BookSearch";
import ConfirmDeleteModal from "../ui/ConfirmDeleteModal";
import { useState } from "react";

const Books = ({ books, onDeleteBook }) => {
  const [selectedTitle, setSelectedTitle] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [bookToDelete, setBookToDelete] = useState(null);

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleSelect = (title) => {
    setSelectedTitle(title);
  };

  const handleDeleteClick = (book) => {
    setBookToDelete(book);
    setShowModal(true);
  };

  const handleConfirmDelete = () => {
    onDeleteBook(bookToDelete.id);
    setShowModal(false);
    setBookToDelete(null);
  };

  const handleCancelDelete = () => {
    setShowModal(false);
    setBookToDelete(null);
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
            title={book.title}
            author={book.author}
            rating={book.rating}
            pageCount={book.pageCount}
            imageUrl={book.imageUrl}
            available={book.available}
            onSelect={handleSelect}
            onDelete={() => handleDeleteClick(book)}
          />
        ))}
      </div>
      <ConfirmDeleteModal
        show={showModal}
        onHide={handleCancelDelete}
        onConfirm={handleConfirmDelete}
        bookTitle={bookToDelete?.bookTitle}
      />
    </>
  );
};

export default Books;
