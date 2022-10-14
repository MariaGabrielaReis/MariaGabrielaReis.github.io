import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 88px;
`;

export const Content = styled.div`
  margin: 0rem 10rem 8rem;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.title};
  font-size: ${({ theme }) => theme.fontSizes.subtitle};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: ${({ theme }) => theme.lineHeight.subtitle};

  text-align: end;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.text};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: ${({ theme }) => theme.lineHeight.text};

  margin-top: 2rem;
  text-align: end;
`;

export const ProjectList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: scroll;
`;

export const ProjectContainer = styled.div`
  width: 19rem;
  height: 22rem;
  padding: 2rem 1rem 0rem;
  margin-right: 2.5rem;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  //overflow: hidden;
`;

export const ProjectTexts = styled.div`
  height: 260px;
  width: 100%;
`;

export const ProjectTitle = styled.p`
  color: ${({ theme }) => theme.colors.title};
  font-size: ${({ theme }) => theme.fontSizes.cardTitle};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: ${({ theme }) => theme.lineHeight.text};

  text-align: center;
`;

export const ProjectName = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.text};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: ${({ theme }) => theme.lineHeight.cardText};

  margin-top: 2.5rem;
`;

export const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.text};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: ${({ theme }) => theme.lineHeight.cardText};
`;

export const ProjectLink = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.cardLink};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: ${({ theme }) => theme.lineHeight.cardText};
  text-decoration-line: unset;
  text-align: center;
  width: 19rem;
  padding: 1.5rem 1rem 0rem;

  border-top: 2px solid ${({ theme }) => theme.colors.primary};
`;

export const DecorationStripes = styled.img``;

export const DecorationCircle = styled.img``;
