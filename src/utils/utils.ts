export interface CardSource {
  top: string;
  bottom: string;
}

export function parseSourcedFile(file: string): CardSource[] {
  const lines = file.split("\n");
  return lines
    .map(line => {
      const [top, bottom] = line.split("-");
      if (top && bottom) {
        return { top: top.trim(), bottom: bottom.trim() };
      }
    })
    .filter(Boolean) as CardSource[];
}

export function downloadFile(file: string) {
  const link = document.createElement("a");
  const blob = new Blob([file], { type: "text/plain" });
  const url = URL.createObjectURL(blob);

  link.href = url;
  link.download = "vocabulary.txt";
  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
}
