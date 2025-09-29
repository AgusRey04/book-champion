import { Card } from "react-bootstrap";

const AuthContainer = ({ children }) => {
  return (
    <div>
      <Card.Body>{children}</Card.Body>
    </div>
  );
};

export default AuthContainer;
