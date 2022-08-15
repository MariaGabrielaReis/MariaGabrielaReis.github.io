import { Container, Content, Title, Description, Button, Buttons } from './style';

import image from '../../assets/image.png';

export default function Greetings() {
  return (
    <Container>
      <Content>
        <Title>
          Muito prazer, pode <br />
          me chamar de Maby!
        </Title>
        <Description>
          Desenvolvedora Front-end, com gosto por UI/ UX e apaixonada por Metodologias Ágeis, mas acima de tudo, eterna
          estudante
        </Description>
        <Buttons>
          <Button>Currículo</Button>
          <Button isFilled>Vamos começar?</Button>
        </Buttons>
      </Content>
      <img src={image} alt="Foto de Maria Gabriela sorrindo" />
    </Container>
  );
}
