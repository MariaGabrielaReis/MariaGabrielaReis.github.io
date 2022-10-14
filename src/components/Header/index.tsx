import { Container, Name, Link, Navbar } from './style';

export default function Header() {
  return (
    <Container>
      <Name>Maria Gabriela Reis</Name>
      <Navbar>
        <Link href="#about">Formação</Link>
        <Link href="#projects">Projetos</Link>
        <Link href="#contacts">Contato</Link>
      </Navbar>
    </Container>
  );
}
