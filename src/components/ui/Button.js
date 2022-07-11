import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  outline: none;
  box-sizing: border-box;
  padding: 5px;
  display: block;
  width: 100px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.backgroundBlueBtn};
  background-color: ${({ theme }) => theme.colors.backgroundBlueBtn};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  transition: background-color 200ms ease, color 200ms ease;
  :hover {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.backgroundBlueBtn};
  }
`;
