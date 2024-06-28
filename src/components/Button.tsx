import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #3788d8;
  color: #ffffff;
  border: none;
  border-radius: 0.7rem;
  font-size: 12px;
  height: 40px;
  width: 100px;
  &:hover {
    background-color: #196aba;
    cursor: pointer;
  }
`;

interface ButtonProps {
  name: string;
  onClick: (params: any) => void;
}

const Button = ({ name, onClick }: ButtonProps) => {
  return <StyledButton onClick={onClick}> {name} </StyledButton>;
};
export default Button;
