import { Button } from "@mui/material";
import { useRef } from "react";

interface SelectFileButtonProps {
  onFileSelected?: (file: File) => void;
}

export const SelectFileButton = ({ onFileSelected }: SelectFileButtonProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <Button
        sx={{
          "&:focus": {
            outline: "none",
          },
        }}
        onClick={() => inputRef.current?.click()}
        variant="outlined"
      >
        Use local file
      </Button>
      <input
        ref={inputRef}
        type="file"
        hidden
        data-testid="file-input"
        onChange={e => {
          if (e.target.files) {
            onFileSelected?.(e.target.files[0]);
          }
        }}
      />
    </>
  );
};
