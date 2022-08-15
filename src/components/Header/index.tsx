import { Container, Name, Link, Navbar } from './style';

export default function Header() {
  return (
    <Container>
      <Name>Maria Gabriela Reis</Name>
      <Navbar>
        <Link>Formação</Link>
        <Link>Projetos</Link>
        <Link>Contato</Link>
      </Navbar>
    </Container>
  );
}
