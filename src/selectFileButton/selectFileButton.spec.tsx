import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SelectFileButton } from "./selectFileButton";

describe("selectFileButton", () => {
  it("should select a file and fire onFileSelect event", async () => {
    const onFileSelect = jest.fn();
    const { getByTestId, getByText } = render(<SelectFileButton onFileSelected={onFileSelect} />);

    const button = getByText("Upload file");
    button.click();

    const fileInput = getByTestId("file-input");
    fileInput.onclick = jest.fn();

    const file = new File(["name - meno"], "file.txt", { type: "text/plain" });
    await userEvent.upload(fileInput, file);

    expect(fileInput.onclick).toHaveBeenCalled();
    expect(onFileSelect).toHaveBeenCalledWith(file);
  });
});
