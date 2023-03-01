import Button from "../Button/Button";
import FormStyled from "./FormStyled";

interface FormProps {
  submitForm: () => void;
}

const Form = ({ submitForm }: FormProps): JSX.Element => {
  return (
    <FormStyled>
      <form className="form">
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
          <input
            type="file"
            placeholder="Introduce an image for your profile"
          />
          <span className=""></span>
        </label>
        <Button text="Sign up" />
      </form>
    </FormStyled>
  );
};

export default Form;
