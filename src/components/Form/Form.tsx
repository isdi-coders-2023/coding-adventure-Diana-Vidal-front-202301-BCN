import Button from "../Button/Button";
import FormStyled from "./FormStyled";

const Form = (): JSX.Element => {
  return (
    <FormStyled>
      <label>
        Email
        <input type="email" placeholder="Introduce your email" />
        <span
          hidden
          className="form__required-text form__required-text--hidden"
        >
          Email is required
        </span>
      </label>
      <label>
        Password
        <input type="password" placeholder="Introduce your password" />
      </label>
      <label>
        Image
        <input type="file" placeholder="Introduce an image for your profile" />
      </label>
      <Button text="Sign up" />
    </FormStyled>
  );
};

export default Form;
