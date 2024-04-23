import { AsyncTextFileReader } from "./asyncTextFileReader";

describe("asyncTextFileReader", () => {
  it("should read a file and return its content", async () => {
    // Arrange
    const file = new File(["name - meno"], "file.txt", { type: "text/plain" });

    // Act
    const asyncTextFileReader = new AsyncTextFileReader();
    const content = await asyncTextFileReader.read(file);

    // Assert
    expect(content).toBe("name - meno");
  });

  it("should throw an error when reading a file fails", async () => {
    jest.spyOn(window, "FileReader").mockImplementation(() => {
      const fileReader = { error: new Error("error") } as Partial<typeof FileReader> as FileReader;
      fileReader.readAsText = () => {
        fileReader.onerror?.({} as ProgressEvent<FileReader>);
      };
      return fileReader;
    });

    const file = new File(["name - meno"], "file.txt", { type: "text/plain" });

    const asyncTextFileReader = new AsyncTextFileReader();
    const promise = asyncTextFileReader.read(file);

    await expect(promise).rejects.toThrow();
  });
});
