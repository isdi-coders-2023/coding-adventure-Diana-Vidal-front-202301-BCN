import FormStyled from "./FormStyled";

const Form = (): JSX.Element => {
  return (
    <FormStyled>
      <h2>Register for the event</h2>
      <form>
        <label htmlFor="email">
          Email
          <input id="email" type="text" placeholder="Introduce your email" />
        </label>
        <label htmlFor="">
          Password
          <input
            id="password"
            type="password"
            placeholder="Introduce your password"
          />
        </label>
        <label htmlFor="image">
          Image
          <input id="image" type="text" placeholder="Introduce an image" />
        </label>
      </form>
    </FormStyled>
  );
};

export default Form;
