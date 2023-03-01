import { render, screen } from "@testing-library/react";
import Form from "./Form";

describe("Given a Form component", () => {
  describe("When rendered a Form component", () => {
    test("Then it should show a button inside with the text 'Sign up'", () => {
      const expectedButton = "Sign up";

      render(<Form />);

      const result = screen.getByRole("button", { name: expectedButton });

      expect(result).toBeInTheDocument();
    });
  });
});
