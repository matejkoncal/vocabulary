import { parseSourcedFile } from "./utils";

describe("parseSourcedFile", () => {
  it("return parsed file source", () => {
    const fileSource = `name - meno
            black - cierny`;

    const result = parseSourcedFile(fileSource);

    expect(result).toEqual([
      { top: "name", bottom: "meno" },
      { top: "black", bottom: "cierny" },
    ]);
  });

  it("return parsed source with Windows line endings", () => {
    const fileSource = `name - meno\r\nblack - cierny`;

    const result = parseSourcedFile(fileSource);

    expect(result).toEqual([
      { top: "name", bottom: "meno" },
      { top: "black", bottom: "cierny" },
    ]);
  });

  it("return parsed source with mixed line endings", () => {
    const fileSource = `name - meno\r\nblack - cierny\n`;

    const result = parseSourcedFile(fileSource);

    expect(result).toEqual([
      { top: "name", bottom: "meno" },
      { top: "black", bottom: "cierny" },
    ]);
  });

  it("return parsed source with empty lines", () => {
    const fileSource = `name - meno\n\nblack - cierny`;

    const result = parseSourcedFile(fileSource);

    expect(result).toEqual([
      { top: "name", bottom: "meno" },
      { top: "black", bottom: "cierny" },
    ]);
  });

  it("return parsed source, if '-' is without wihitespaces", () => {
    const fileSource = `name-meno\nblack-cierny`;

    const result = parseSourcedFile(fileSource);

    expect(result).toEqual([
      { top: "name", bottom: "meno" },
      { top: "black", bottom: "cierny" },
    ]);
  });
});
