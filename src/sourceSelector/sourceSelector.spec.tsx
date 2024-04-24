import { act, fireEvent, render, waitFor } from "@testing-library/react";

const mockGetVocabularySourceByAi = jest.fn().mockResolvedValue([{ front: "front", back: "back" }]);
jest.mock("../firebaseFunctions", () => {
  return {
    getVocabularySourceByAi: mockGetVocabularySourceByAi,
  };
});

import { SourceSelector } from "./sourceSelector";

describe("sourceSelector", () => {
  it("should show dialog when AI button is clicked", () => {
    const { getByText } = render(<SourceSelector />);
    const button = getByText("Use AI");

    act(() => {
      button.click();
    });

    expect(getByText("Generate")).toBeTruthy();
  });

  it("should call callback with source from AI Generate button in dialog is clicked", async () => {
    const onFileSelected = jest.fn();
    const { getByText } = render(<SourceSelector onFileSelected={onFileSelected} />);
    const button = getByText("Use AI");

    act(() => {
      button.click();
    });

    act(() => {
      getByText("Generate").click();
    });
    await waitFor(() => expect(onFileSelected).toHaveBeenCalledWith([{ front: "front", back: "back" }]));
  });

  it("should call getVocabularySourceByAi with correct parameters", async () => {
    const { getByText, getByLabelText } = render(<SourceSelector />);
    const button = getByText("Use AI");

    act(() => {
      button.click();
    });

    act(() => {
      const topInput = getByLabelText("Top side language");
      fireEvent.change(topInput, { target: { value: "top" } });

      const bottomInput = getByLabelText("Bottom side language");
      fireEvent.change(bottomInput, { target: { value: "bottom" } });

      const topicInput = getByLabelText("Topic");
      fireEvent.change(topicInput, { target: { value: "topic" } });
    });

    act(() => {
      getByText("Generate").click();
    });

    await waitFor(() => expect(mockGetVocabularySourceByAi).toHaveBeenCalledWith("top", "bottom", "topic"));
  });
});
