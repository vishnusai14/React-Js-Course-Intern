import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Testing Async Component", () => {
  test("Posts have been fetched", async () => {
    render(<Async />);
    const listElements = await screen.findAllByRole("listitem");
    expect(listElements).not.toHaveLength(0);
  });
});
