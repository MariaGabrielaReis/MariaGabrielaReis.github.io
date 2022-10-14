import {
  Container,
  Content,
  Title,
  Description,
  ProjectList,
  List,
  ProjectContainer,
  ProjectTexts,
  ProjectTitle,
  ProjectName,
  ProjectDescription,
  ProjectLink,
  DecorationCircle,
} from './style';

import semicircle from '../../assets/semicircle.png';
import { projects } from '../../utils/projects';

export default function Projects() {
  return (
    <Container>
      <Content>
        <Title id="projects">Projetos</Title>
        <Description>
          Aqui você pode ver todos os projetos que já fiz, mesmo os que não posso provar <br /> (ainda bem que alguma
          hora conhecemos o Git, né não?)
        </Description>
      </Content>
      <ProjectList>
        <List>
          {projects.map((project, index) => {
            return (
              <ProjectContainer isFirst={index === 0}>
                <ProjectTexts>
                  <ProjectTitle>{project.title.toUpperCase()}</ProjectTitle>
                  <ProjectName>{project.name}</ProjectName>
                  {project.description && <ProjectDescription>{project.description}</ProjectDescription>}
                </ProjectTexts>
                {project.link && (
                  <ProjectLink href={project.link} target="_blank">
                    Ver repositório
                  </ProjectLink>
                )}
              </ProjectContainer>
            );
          })}
        </List>
        <DecorationCircle src={semicircle} />
      </ProjectList>
    </Container>
  );
}
