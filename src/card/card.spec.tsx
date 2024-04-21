import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Card } from "./card";

describe("Card", () => {
  it("should render top", () => {
    const { getByText } = render(<Card top="top" bottom="bottom" />);
    expect(getByText("top")).toBeTruthy();
  });

  it("should render bottom", () => {
    const { getByText } = render(<Card top="top" bottom="bottom" />);
    expect(getByText("bottom")).toBeTruthy();
  });
});
