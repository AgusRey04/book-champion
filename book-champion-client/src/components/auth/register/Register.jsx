import { useState, useRef } from "react";
import { Button, Form, FormGroup, Card, Row } from "react-bootstrap";
import { useNavigate } from "react-router";
import AuthContainer from "../AuthContainer";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!name) {
      alert("Por favor, complete el nombre");
      nameRef.current.focus();
      return;
    }
    if (!email) {
      alert("Por favor, complete el email");
      emailRef.current.focus();
      return;
    }
    if (!password || password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres");
      passwordRef.current.focus();
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.message || "Error en registro");
      }

      alert("Usuario registrado correctamente. Ahora inicia sesión.");
      navigate("/login");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <AuthContainer>
      <Card className="mt-5 mx-3 p-3 px-5 shadow">
        <Row className="mb-2">
          <h5>Crear cuenta en Books Champion</h5>
        </Row>
        <Form onSubmit={handleSubmit}>
          <FormGroup className="mb-3">
            <Form.Control
              type="text"
              placeholder="Ingresar nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              ref={nameRef}
            />
          </FormGroup>
          <FormGroup className="mb-3">
            <Form.Control
              type="text"
              placeholder="Ingresar email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              ref={emailRef}
            />
          </FormGroup>
          <FormGroup className="mb-3">
            <Form.Control
              type="password"
              placeholder="Ingresar contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              ref={passwordRef}
            />
          </FormGroup>
          <div className="d-flex justify-content-end">
            <Button variant="secondary" type="submit">
              Registrarse
            </Button>

            <Button
              variant="outline-primary"
              type="button"
              onClick={() => navigate("/login")}
            >
              Iniciar sesión
            </Button>
          </div>
        </Form>
      </Card>
    </AuthContainer>
  );
};

export default Register;
