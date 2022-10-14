import {
  Container,
  Content,
  Title,
  Description,
  ProjectList,
  ProjectContainer,
  ProjectTexts,
  ProjectTitle,
  ProjectName,
  ProjectDescription,
  ProjectLink,
  DecorationStripes,
  DecorationCircle,
} from './style';

export default function Projects() {
  return (
    <Container>
      <Content>
        <Title>Projetos</Title>
        <Description>
          Aqui você pode ver todos os projetos que já fiz, mesmo os que não posso provar <br /> (ainda bem que alguma
          hora conhecemos o Git, né não?)
        </Description>
      </Content>
      <ProjectList>
        <DecorationStripes />
        <ProjectContainer>
          <ProjectTexts>
            <ProjectTitle>NEXT LEVEL WEEK #05</ProjectTitle>
            <ProjectName>Plant Manager</ProjectName>
            <ProjectDescription>Aplicativo de lembretes</ProjectDescription>
          </ProjectTexts>

          <ProjectLink href="" target="_blank">
            Ver repositório
          </ProjectLink>
        </ProjectContainer>
        <DecorationCircle />
      </ProjectList>
    </Container>
  );
}
