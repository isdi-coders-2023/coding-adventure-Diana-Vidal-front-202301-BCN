import styled from "styled-components";

const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colorButton};
  width: 323.02px;
  height: 40px;
  border-radius: 10px;
  font-family: ${(props) => props.theme.mainFontFamily};
  font-size: ${(props) => props.theme.sizeFontMobile};
  color: ${(props) => props.theme.fontColor};
  :disabled {
    opacity: 0.57;
  }

  @media (min-width: 850px) {
    height: 57px;
    left: 327px;
  }
`;

export default ButtonStyled;
