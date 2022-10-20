import styled from 'styled-components';
import stripes from '../../assets/stripes.png';

export const Container = styled.section`
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
  overflow-x: hidden;
  background-image: url(${stripes});
  background-repeat: no-repeat;
  position: relative;
  white-space: nowrap;
  height: 382px;

  @keyframes marquee {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(-990%, 0);
    }
  }
`;

export const List = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  height: 100%;
  animation: marquee 380s linear infinite;
`;

export const ProjectContainer = styled.div<{ isFirst: boolean }>`
  height: 22rem;
  padding: 2rem 1rem 0rem;
  margin-left: ${({ isFirst }) => (isFirst ? '150px' : '0px')};
  margin-right: 2.5rem;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const ProjectTexts = styled.div`
  height: 260px;
  width: 272px;
  white-space: normal;
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
  padding: 1.5rem 3.2rem 0rem;

  border-top: 2px solid ${({ theme }) => theme.colors.primary};
`;

export const DecorationCircle = styled.img`
  position: absolute;
  z-index: 5;
  top: 0;
  right: 0;
  overflow: hidden;
`;
