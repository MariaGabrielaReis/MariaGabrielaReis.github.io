import styled from 'styled-components';
import decoration from '../../assets/decoration.png';

type ButtonProps = {
  isFilled?: boolean;
};

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 8rem;
  margin-bottom: 88px;
  background-image: url(${decoration});
  background-repeat: no-repeat;
`;

export const Content = styled.div`
  padding-left: 10rem;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.title};
  font-size: ${({ theme }) => theme.fontSizes.title};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: ${({ theme }) => theme.lineHeight.title};

  max-width: 45rem;
  margin-left: 8rem;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.text};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  line-height: ${({ theme }) => theme.lineHeight.text};

  max-width: 30rem;
  margin-top: 2rem;
  margin-left: 12rem;
`;

export const Button = styled.button<ButtonProps>`
  color: ${({ theme, isFilled }) => (isFilled ? theme.colors.secondary : theme.colors.primary)};
  background: ${({ theme, isFilled }) => (isFilled ? theme.colors.primary : theme.colors.secondary)};
  font-size: ${({ theme }) => theme.fontSizes.buttonText};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: ${({ theme }) => theme.lineHeight.text};

  width: 14rem;
  padding: 1rem 2rem;
  margin-right: 2rem;
  border-radius: 8px;
  border: ${({ isFilled }) => (isFilled ? '0px' : '2px')} solid
    ${({ theme, isFilled }) => (isFilled ? theme.colors.secondary : theme.colors.primary)};
`;

export const Buttons = styled.p`
  margin-top: 2rem;
  display: flex;
  align-items: center;
`;
