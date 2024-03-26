import React from "react";
import "./App.css";
import {
  Container,
  Header,
  ButtonContainer,
  Content,
  LeftContent,
  RightContent,
  Image,
  ButtonHeader,
  SubText,
  Title,
  TextHeader,
  Content2,
  Itens,
  TextInfo,
  IconText,
} from "./styles";
import julia from "./assets/home.jpeg";
import cry from "./assets/cry.png";
import bad from "./assets/bad.png";
import grafic from "./assets/grafic.png";
import doente from "./assets/doente.png";

function App() {
  return (
    <div className="App">
      <Container>
        <Header>
          <TextHeader>Julia Moura Psicologa</TextHeader>
          <ButtonContainer>
            <ButtonHeader>Como posso te ajudar?</ButtonHeader>
            <ButtonHeader>O que é a TCC?</ButtonHeader>
            <ButtonHeader>Atendimentos Online</ButtonHeader>
            <ButtonHeader>Contato</ButtonHeader>
          </ButtonContainer>
        </Header>
        <Content>
          <LeftContent>
            <Title>Julia Moura Psicologa</Title>
            <SubText>
              A TCC é uma abordagem clínica, ou seja, é uma das teorias que
              podem basear o atendimento psicoterapêutico. Ela se destaca por
              sua base científica — os precursores da terapia
              cognitivo-comportamental partiram do método científico e
              consideraram os conhecimentos sobre comportamento e neurociência.
              Foi com esse histórico que surgiu a abordagem, que busca analisar
              a relação entre nossos pensamentos, sentimentos e modos de agir.
              Ou seja, o terapeuta TCC entende que aquilo que uma pessoa faz se
              baseia no que ela pensa e em como ela se sente diante das
              situações da vida. Inicialmente, o trabalho do terapeuta é
              identificar os padrões de comportamento do paciente. O primeiro
              objetivo dele é conhecer quais foram os problemas que levaram a
              pessoa a buscar terapia e entender quais pensamentos, emoções e
              comportamentos estão envolvidos nessas situações.
            </SubText>
          </LeftContent>
          <RightContent>
            <Image src={julia} alt="Imagem" className="Image" />
          </RightContent>
        </Content>
        <Content2>
          <Title>Para quem serve meu trabalho?</Title>
          <Itens>
            <Content2>
              <IconText src={cry} alt="cry" className="Image" />
              <TextInfo>Para quem está triste</TextInfo>
            </Content2>
            <Content2>
              <IconText src={bad} alt="bad" className="Image" />
              <TextInfo>Para quem está com problemas de autoestima</TextInfo>
            </Content2>
            <Content2>
              <IconText src={grafic} alt="bad" className="Image" />
              <TextInfo>
                Para quem quer trabalhar o desenvolvimento pessoal
              </TextInfo>
            </Content2>
            <Content2>
              <IconText src={doente} alt="bad" className="Image" />
              <TextInfo>Para quem está ansioso</TextInfo>
            </Content2>
          </Itens>
        </Content2>
        <Content>
          <LeftContent>
            <Title>Julia Moura Psicologa</Title>
            <SubText>
              A TCC é uma abordagem clínica, ou seja, é uma das teorias que
              podem basear o atendimento psicoterapêutico. Ela se destaca por
              sua base científica — os precursores da terapia
              cognitivo-comportamental partiram do método científico e
              consideraram os conhecimentos sobre comportamento e neurociência.
              Foi com esse histórico que surgiu a abordagem, que busca analisar
              a relação entre nossos pensamentos, sentimentos e modos de agir.
              Ou seja, o terapeuta TCC entende que aquilo que uma pessoa faz se
              baseia no que ela pensa e em como ela se sente diante das
              situações da vida. Inicialmente, o trabalho do terapeuta é
              identificar os padrões de comportamento do paciente. O primeiro
              objetivo dele é conhecer quais foram os problemas que levaram a
              pessoa a buscar terapia e entender quais pensamentos, emoções e
              comportamentos estão envolvidos nessas situações.
            </SubText>
          </LeftContent>
          <RightContent>
            <Image src={julia} alt="Imagem" className="Image" />
          </RightContent>
        </Content>
        <Content>
          <RightContent>
            <Image src={julia} alt="Imagem" className="Image" />
          </RightContent>
          <LeftContent>
            <Title>Julia Moura Psicologa</Title>
            <SubText>
              A TCC é uma abordagem clínica, ou seja, é uma das teorias que
              podem basear o atendimento psicoterapêutico. Ela se destaca por
              sua base científica — os precursores da terapia
              cognitivo-comportamental partiram do método científico e
              consideraram os conhecimentos sobre comportamento e neurociência.
              Foi com esse histórico que surgiu a abordagem, que busca analisar
              a relação entre nossos pensamentos, sentimentos e modos de agir.
              Ou seja, o terapeuta TCC entende que aquilo que uma pessoa faz se
              baseia no que ela pensa e em como ela se sente diante das
              situações da vida. Inicialmente, o trabalho do terapeuta é
              identificar os padrões de comportamento do paciente. O primeiro
              objetivo dele é conhecer quais foram os problemas que levaram a
              pessoa a buscar terapia e entender quais pensamentos, emoções e
              comportamentos estão envolvidos nessas situações.
            </SubText>
          </LeftContent>
        </Content>
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

export default App;
