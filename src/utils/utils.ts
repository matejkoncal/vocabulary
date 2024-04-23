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
