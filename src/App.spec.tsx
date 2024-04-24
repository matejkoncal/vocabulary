Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

jest.mock("./firebaseFunctions", () => {
  return {
    getVocabularySourceByAi: jest.fn().mockResolvedValue([{ front: "front", back: "back" }]),
  };
});

import { act, render } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

describe("App", () => {
  it("should render with button", () => {
    const { getByText } = render(<App />);
    jest.useFakeTimers();
    setTimeout(() => {
      const button = getByText("Use local file");
      expect(button).toBeTruthy();
    }, 100000);
  });

  it("should render card based on uploaded file", async () => {
    const { getByText, getByTestId } = render(<App />);
    jest.useFakeTimers();
    setTimeout(async () => {
      const button = getByText("Use local file");
      button.click();

      const fileInput = getByTestId("file-input");

      act(() => {
        fileInput.onclick = jest.fn();
      });

      const file = new File(["name - meno"], "file.txt", { type: "text/plain" });
      await userEvent.upload(fileInput, file);

      expect(fileInput.onclick).toHaveBeenCalled();
      expect(getByText("name")).toBeTruthy();
    }, 100000);
  });
});
