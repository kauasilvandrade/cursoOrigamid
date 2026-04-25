import styled from "styled-components";

const Titulo = styled.h1`
  font-size: 2em;
  color: red;
  text-align: center;
`;

export function App() {
  return (
    <div>
      <Titulo>Olá, Mundo!</Titulo>
    </div>
  );
}
