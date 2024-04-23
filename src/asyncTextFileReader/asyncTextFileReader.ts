export class AsyncTextFileReader {
  private fileReader: FileReader;

  constructor() {
    this.fileReader = new FileReader();
  }

  public async read(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      this.fileReader.onload = () => {
        resolve(this.fileReader.result as string);
      };
      this.fileReader.onerror = () => {
        reject(this.fileReader.error);
      };
      this.fileReader.readAsText(file);
    });
  }
}
