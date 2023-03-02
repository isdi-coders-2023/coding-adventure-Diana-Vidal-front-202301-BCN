import styled from "styled-components";

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  gap: 48px;

  .form {
    &__required-text {
      color: ${(props) => props.theme.requiredText};
    }
  }

  label {
    display: flex;
    flex-direction: column;
    color: ${(props) => props.theme.colorFont};
    font-family: ${(props) => props.theme.accentFont};
    gap: 10px;
  }

  h2 {
    font-family: ${(props) => props.theme.mainFontFamily};
    font-size: ${(props) => props.theme.sizeFontMobile};
    color: ${(props) => props.theme.colorButton};
  }

  input {
    width: 325px;
    height: 40px;
    border-radius: 8px;
    padding-left: 11px;
    border: 1px solid #fff;
    margin-bottom: 9px;
    gap: 30px;
  }

  @media (min-width: 850px) {
    input {
      width: 832.05px;
    }
  }
`;

export default FormStyled;
