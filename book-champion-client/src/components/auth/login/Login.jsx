import { useState, useRef } from "react";
import { Button, Card, Col, Form, FormGroup, Row } from "react-bootstrap";
import { useNavigate } from "react-router";
import AuthContainer from "../AuthContainer";
const Login = ({ onLogin }) => {
  const navigate = useNavigate();
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

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   if (!emailRef.current.value.length) {
  //     setErrors((prev) => ({ ...prev, email: true }));
  //     alert("Por favor, complete el email");
  //     emailRef.current.focus();
  //     return;
  //   }
  //   if (!password.length || password.length < 6) {
  //     setErrors((prev) => ({ ...prev, password: true }));
  //     alert("Por favor, complete la contraseña.");
  //     passwordRef.current.focus();
  //     return;
  //   }
  //   setErrors({ email: false, password: false });
  //   alert(`El email ingresado es: ${email} y el password es ${password}`);

  //   setEmail("");
  //   setPassword("");
  //   onLogin();
  //   navigate("/library");
  // };
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!emailRef.current.value.length) {
      setErrors((prev) => ({ ...prev, email: true }));
      alert("Por favor, complete el email");
      emailRef.current.focus();
      return;
    }
    if (!password.length || password.length < 6) {
      setErrors((prev) => ({ ...prev, password: true }));
      alert("Por favor, complete la contraseña.");
      passwordRef.current.focus();
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.message || "Error en login");
      }

      const token = await res.json();
      localStorage.setItem("book-champions-token", token);
      setEmail("");
      setPassword("");
      onLogin();
      navigate("/library");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <AuthContainer>
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
              <Col md={6} className="d-flex justify-content-end">
                <Button variant="secondary" type="submit">
                  Iniciar sesión
                </Button>

                <Button
                  variant="outline-primary"
                  type="button"
                  onClick={() => navigate("/register")}
                >
                  Registrar
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </AuthContainer>
  );
};

export default Login;
