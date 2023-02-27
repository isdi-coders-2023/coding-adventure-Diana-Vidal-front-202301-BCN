import styled from "styled-components";

const ButtonStyled = styled.button`
  background-color: #cccf18;
  width: 323.02px;
  height: 40px;
  border-radius: 10px;
  font-family: "Saira Stencil One";
  font-size: 20px;
  color: #1e1e1e;
  :disabled {
    opacity: 0.57;
  }

  @media (min-width: 500px) {
    height: 57px;
    left: 327px;
  }
`;

export default ButtonStyled;
