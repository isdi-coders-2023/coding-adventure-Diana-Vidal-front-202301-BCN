import Button from "../Button/Button";

interface FormProps {
  submitForm: () => void;
}

const Form = ({ submitForm }: FormProps): JSX.Element => {
  return (
    <>
      <h2>Register for the event</h2>
      <form className="formContainer">
        <label htmlFor="email">
          Email
          <input id="email" type="text" placeholder="Introduce your email" />
        </label>
        <label htmlFor="password">
          Password
          <input
            id="password"
            type="password"
            placeholder="Introduce your password"
          />
        </label>
        <label htmlFor="image">
          Image
          <input id="image" type={"file"} placeholder="Introduce an image" />
        </label>
        <Button text="Sign up" />
      </form>
    </>
  );
};

export default Form;
