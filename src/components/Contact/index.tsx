import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import theme from '../../styles/theme';
import { Container, Content, Title, Description, ContactContainer, ContactLink, Link } from './style';

export default function Contact() {
  return (
    <Container>
      <Content>
        <Title id="contacts">Contato</Title>
        <Description>
          Caso queira entrar em contato comigo, pode me mandar um e-mail ou uma mensagem pelo LinkedIn!
        </Description>
      </Content>
      <ContactContainer>
        <ContactLink>
          <FiMail size={32} style={{ color: theme.colors.primary, marginRight: '16px' }} />
          <Link
            target="_blank"
            href="mailto:mariagabrielagreis@gmail.com?body=Olá, Maby, tudo bem? Estou entrando em contato para..."
          >
            mariagabrielagreis@gmail.com
          </Link>
        </ContactLink>
        <ContactLink>
          <FiLinkedin size={32} style={{ color: theme.colors.primary, marginRight: '16px' }} />
          <Link target="_blank" href="https://www.linkedin.com/in/mariagabrielareis/">
            linkedin.com/in/mariagabrielareis
          </Link>
        </ContactLink>
        <ContactLink>
          <FiGithub size={32} style={{ color: theme.colors.primary, marginRight: '16px' }} />
          <Link target="_blank" href="https://github.com/mariagabrielareis">
            github.com/mariagabrielareis
          </Link>
        </ContactLink>
      </ContactContainer>
    </Container>
  );
}
