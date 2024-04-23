Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation(() => ({
    matchMedia: jest.fn(),
  })),
});

import { act, render } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

describe("App", () => {
  it("should render with button", () => {
    const { getByText } = render(<App />);
    const button = getByText("Use local file");
    expect(button).toBeTruthy();
  });

  it("should render card based on uploaded file", async () => {
    const { getByText, getByTestId } = render(<App />);
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
  });
});
