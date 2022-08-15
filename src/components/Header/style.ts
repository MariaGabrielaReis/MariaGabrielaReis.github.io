import styled from 'styled-components';

export const Container = styled.div`
  color: ${(props) => props.theme.colors.title};

  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.75);
`;

export const Name = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.topic};
  font-weight: ${(props) => props.theme.fontWeight.regular};
`;

export const Link = styled.a`
  font-size: ${(props) => props.theme.fontSizes.headerLink};

  padding-left: 2.5rem;
`;

export const Navbar = styled.div`
  font-size: ${(props) => props.theme.fontSizes.headerLink};

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
