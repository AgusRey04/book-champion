import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Badge } from "react-bootstrap";
import { StarFill, Star } from "react-bootstrap-icons";

const BookItem = ({
  title,
  author,
  rating,
  pageCount,
  imageUrl,
  available,
  onSelect,
  onDelete,
}) => {
  const formattedRating = Array.from({ length: 5 }, (_, i) =>
    i < rating ? <StarFill key={`star-${i}`} /> : <Star key={`star-${i}`} />
  );

  return (
    <Card style={{ width: "18rem" }} className="mx-3">
      <Card.Img variant="top" src={imageUrl || "https://bit.ly/47NylZk"} />
      <Card.Body>
        <div className="mb-2">
          {available ? (
            <Badge bg="success">Disponible</Badge>
          ) : (
            <Badge bg="danger">No disponible</Badge>
          )}
        </div>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle>{author}</Card.Subtitle>
        <Card.Text>{formattedRating} Estrellas</Card.Text>
        <Card.Text>{pageCount} Páginas</Card.Text>
        <Button onClick={() => onSelect(title)}>Seleccionar libro</Button>
        <Button variant="danger" onClick={onDelete}>
          Eliminar
        </Button>
      </Card.Body>
    </Card>
  );
};
export default BookItem;
