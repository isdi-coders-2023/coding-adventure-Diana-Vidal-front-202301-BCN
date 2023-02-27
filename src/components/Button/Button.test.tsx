import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When it rendred", () => {
    test("Then it should return a button with text 'Sign up'", () => {
      const buttonText = "Sign up";

      render(<Button text="Sign up" />);

      const expectedComponent = screen.getByRole("button", {
        name: buttonText,
      });

      expect(expectedComponent).toBeInTheDocument();
    });
  });
});
