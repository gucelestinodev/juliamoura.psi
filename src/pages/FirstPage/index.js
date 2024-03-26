import React from "react";
import "./App.css";
import { Container, Image } from "./styles";
import julia from "./assets/home.jpeg";

function FirstPage() {
  return (
    <div className="App">
      <Container>
        <Image src={julia} alt="Imagem" className="Image" />

        <Image src={julia} alt="Imagem" className="Image" />
        <footer className="Footer">
          <div className="ContactInfo">
            <p>Telefone: (35) 99751-1380</p>
            <p>Email: juliamourapsi@gmail.com</p>
            <p>WhatsApp: (35) 99751-1380</p>
            <p>Instagram: @juliamoura.psi</p>
          </div>
          <div className="InputsContainer">
            <div className="DoubleInputs">
              <input type="text" placeholder="Nome" />
              <input type="text" placeholder="Sobrenome" />
            </div>
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Telefone" />
            <input type="text" placeholder="Mensagem" />
          </div>
        </footer>
      </Container>
    </div>
  );
}

export default FirstPage;
