import { useState, useRef } from "react";
import { Button, Card, Col, Form, FormGroup, Row } from "react-bootstrap";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({ email: false, password: false });

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!emailRef.current.value.length) {
      setErrors((prev) => ({ ...prev, email: true }));
      alert("Por favor, complete todos los campos.");
      emailRef.current.focus();
      return;
    }
    if (!password.length || password.length < 6) {
      setErrors((prev) => ({ ...prev, password: true }));
      alert("Por favor, complete todos los campos.");
      passwordRef.current.focus();
      return;
    }
    setErrors({ email: false, password: false });
    alert(`El email ingresado es: ${email} y el password es ${password}`);

    setEmail("");
    setPassword("");
  };

  return (
    <Card className="mt-5 mx-3 p-3 px-5 shadow">
      <Card.Body>
        <Row className="mb-2">
          <h5>¡Bienvenidos a Books Champion!</h5>
        </Row>
        <Form onSubmit={handleSubmit}>
          <FormGroup className="mb-4">
            <Form.Control
              type="text"
              placeholder="Ingresar email"
              onChange={handleEmailChange}
              value={email}
              ref={emailRef}
              className={errors.email && "is-invalid"}
            />
          </FormGroup>
          <FormGroup className="mb-4">
            <Form.Control
              type="password"
              placeholder="Ingresar contraseña"
              onChange={handlePasswordChange}
              value={password}
              ref={passwordRef}
              className={errors.password && "is-invalid"}
            />
          </FormGroup>
          <Row>
            <Col />
            <Col md={6} className="d-flex justify-content-end">
              <Button variant="secondary" type="submit">
                Iniciar sesión
              </Button>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Login;
