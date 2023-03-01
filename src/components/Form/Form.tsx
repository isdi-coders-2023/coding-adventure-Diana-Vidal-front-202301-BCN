import Button from "../Button/Button";

interface FormProps {
  submitForm: () => void;
}

const Form = ({ submitForm }: FormProps): JSX.Element => {
  return (
    <>
      <form className="form__container">
        <label>
          Email
          <input type="email" placeholder="Introduce your email" />
        </label>
        <label>
          Password
          <input type="password" placeholder="Introduce your password" />
        </label>
        <label>
          Image
          <input type="file" placeholder="Introduce an image" />
        </label>
        <Button text="Sign up" />
      </form>
    </>
  );
};

export default Form;
