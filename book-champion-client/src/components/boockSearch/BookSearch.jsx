import { Form } from "react-bootstrap";
const BookSearch = ({ searchValue, setSearchValue }) => {
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <>
      <Form.Group controlId="searchBook" className="mb-3">
        <Form.Label>Buscar libro</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingresa el título del libro"
          value={searchValue}
          onChange={handleSearchChange}
        />
      </Form.Group>
    </>
  );
};

export default BookSearch;
