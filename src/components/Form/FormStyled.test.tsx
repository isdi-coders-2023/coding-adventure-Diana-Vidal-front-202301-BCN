import { render, screen } from "@testing-library/react";
import Form from "./Form";

describe("Given a Form component", () => {
  describe("When rendered", () => {
    test("Then it should show a button inside with the text 'Sign up'", () => {
      const expectedButton = "Sign up";

      render(<Form />);

      const result = screen.getByRole("button", { name: expectedButton });

      expect(result).toBeInTheDocument();
    });

    test("Then it should show an input with the text 'Email'", () => {
      const expectedInputText = "Email";

      render(<Form />);

      const result = screen.getByRole("textbox", { name: expectedInputText });

      expect(result).toBeInTheDocument();
    });

    test("Then it should show an input with the text 'Password'", () => {
      const expectedInputText = "Password";

      render(<Form />);

      const result = screen.getByLabelText(expectedInputText);

      expect(result).toBeInTheDocument();
    });

    test("Then it should show a button to choose a file", () => {
      render(<Form />);

      const result = screen.getByRole("button");

      expect(result).toBeInTheDocument();
    });
  });
});
