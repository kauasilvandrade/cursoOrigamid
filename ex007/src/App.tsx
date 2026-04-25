import Card from "react-bootstrap/Card";
import { ThreeDCardDemo } from "./components/CardEffect/index";

export function App() {
  return (
    <div>
      <h1 className="mb-5">Components</h1>
      <h2>Card</h2>
      <Card
        bg="dark"
        text="white"
        className="m-5"
        style={{ maxWidth: "18rem" }}
      >
        <Card.Header>Notebook</Card.Header>
        <Card.Body>
          <Card.Title>R$ 2500</Card.Title>
          <Card.Text>
            Esse é um notebook com 1tb, 16gb de ram e uma placa de video de
            16gb.
          </Card.Text>
        </Card.Body>
      </Card>
      <h2 className="mb-5">Card Effect</h2>
    </div>
  );
}
