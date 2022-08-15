import styled from 'styled-components';
import decoration from '../../assets/decoration.png';

interface ButtonProps {
  isFilled?: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 8rem;
  background-image: url(${decoration});
  background-repeat: no-repeat;
`;

export const Content = styled.div`
  padding-left: 10rem;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.title};
  font-size: ${(props) => props.theme.fontSizes.title};
  font-weight: ${(props) => props.theme.fontWeight.medium};
  line-height: ${(props) => props.theme.lineHeight.title};

  max-width: 45rem;
  margin-left: 8rem;
`;

export const Description = styled.p`
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.fontSizes.text};
  font-weight: ${(props) => props.theme.fontWeight.regular};
  line-height: ${(props) => props.theme.lineHeight.text};

  max-width: 30rem;
  margin-top: 2rem;
  margin-left: 12rem;
`;

export const Button = styled.button<ButtonProps>`
  color: ${(props) => (props.isFilled ? props.theme.colors.secondary : props.theme.colors.primary)};
  background: ${(props) => (props.isFilled ? props.theme.colors.primary : props.theme.colors.secondary)};
  font-size: ${(props) => props.theme.fontSizes.buttonText};
  font-weight: ${(props) => props.theme.fontWeight.medium};
  line-height: ${(props) => props.theme.lineHeight.text};

  width: 14rem;
  padding: 1rem 2rem;
  margin-right: 2rem;
  border-radius: 8px;
  border: ${(props) => (props.isFilled ? '0px' : '2px')} solid
    ${(props) => (props.isFilled ? props.theme.colors.secondary : props.theme.colors.primary)};
`;

export const Buttons = styled.p`
  margin-top: 2rem;
  display: flex;
  align-items: center;
`;
