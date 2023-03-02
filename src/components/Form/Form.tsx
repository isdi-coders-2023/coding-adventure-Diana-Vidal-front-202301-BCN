import { useState } from "react";
import Button from "../Button/Button";
import FormStyled from "./FormStyled";

const Form = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const isDisabled = email === "" && password === "";

  return (
    <FormStyled>
      <label>
        Email
        <input
          type="email"
          placeholder="Introduce your email"
          value={email}
          onChange={handleEmailChange}
        />
        <span
          hidden
          className="form__required-text form__required-text--hidden"
        >
          Email is required
        </span>
      </label>
      <label>
        Password
        <input
          type="password"
          placeholder="Introduce your password"
          value={password}
          onChange={handlePasswordChange}
        />
      </label>
      <label>
        Image
        <input type="file" placeholder="Introduce an image for your profile" />
      </label>
      <Button isDisabled={isDisabled} text="Sign up" />
    </FormStyled>
  );
};

export default Form;
