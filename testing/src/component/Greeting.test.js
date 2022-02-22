import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";
describe("Testing Greeting Component", () => {
  test("render button not click if button not click", () => {
    render(<Greeting />);
    const linkElement = screen.getByText("Button Not Click", { exact: false });
    expect(linkElement).toBeInTheDocument();
  });

  test("render button click if button is clicked", () => {
    render(<Greeting />);
    userEvent.click(screen.getByRole("button"));
    const linkElement = screen.getByText("Button is Clicked", { exact: false });
    expect(linkElement).toBeInTheDocument();
  });

  test("not render button not click if button is click", () => {
    render(<Greeting />);
    userEvent.click(screen.getByRole("button"));
    const linkElement = screen.queryByText("Button Not Click", {
      exact: false,
    });
    expect(linkElement).toBeNull();
  });
});
