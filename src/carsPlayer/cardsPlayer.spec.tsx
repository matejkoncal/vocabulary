import { render } from "@testing-library/react";
import { CardsPlayer } from "./cardsPlayer";
import { act } from "react-dom/test-utils";

describe("cardsPlayer", () => {
  it("should render card by source", () => {
    const { getByText } = render(<CardsPlayer cardsSource={[{ top: "top", bottom: "bottom" }]} />);
    expect(getByText("top")).toBeTruthy();
    expect(getByText("bottom")).toBeTruthy();
  });

  it("should render next card after click on next button", () => {
    const { getByText } = render(
      <CardsPlayer
        cardsSource={[
          { top: "top", bottom: "bottom" },
          { top: "top2", bottom: "bottom2" },
        ]}
      />,
    );

    act(() => {
      const nextButton = getByText("Next");
      nextButton.click();
    });

    expect(getByText("top2")).toBeTruthy();
    expect(getByText("bottom2")).toBeTruthy();
  });

  it("should render previous card after click on previous button", () => {
    const { getByText } = render(
      <CardsPlayer
        cardsSource={[
          { top: "top", bottom: "bottom" },
          { top: "top2", bottom: "bottom2" },
        ]}
      />,
    );

    act(() => {
      const nextButton = getByText("Next");
      nextButton.click();
    });

    act(() => {
      const previousButton = getByText("Previous");
      previousButton.click();
    });

    expect(getByText("top")).toBeTruthy();
    expect(getByText("bottom")).toBeTruthy();
  });

  it("should render first card after click on next button on last card", () => {
    const { getByText } = render(
      <CardsPlayer
        cardsSource={[
          { top: "top", bottom: "bottom" },
          { top: "top2", bottom: "bottom2" },
        ]}
      />,
    );

    act(() => {
      const nextButton = getByText("Next");
      nextButton.click();
    });

    act(() => {
      const nextButton = getByText("Next");
      nextButton.click();
    });

    expect(getByText("top")).toBeTruthy();
    expect(getByText("bottom")).toBeTruthy();
  });

  it("should render last card after click on previous button on first card", () => {
    const { getByText } = render(
      <CardsPlayer
        cardsSource={[
          { top: "top", bottom: "bottom" },
          { top: "top2", bottom: "bottom2" },
        ]}
      />,
    );

    act(() => {
      const previousButton = getByText("Previous");
      previousButton.click();
    });

    expect(getByText("top2")).toBeTruthy();
    expect(getByText("bottom2")).toBeTruthy();
  });
});
