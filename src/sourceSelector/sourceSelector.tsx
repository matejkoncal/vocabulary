import { Container, Stack } from "@mui/material";
import { SelectFileButton } from "../selectFileButton/selectFileButton";

interface SourceSelectorProps {
  onFileSelected?: (file: File) => void;
}

export const SourceSelector = ({ onFileSelected }: SourceSelectorProps) => {
  return (
    <Container style={{ maxWidth: "600px" }}>
      <Stack spacing={2}>
        <SelectFileButton onFileSelected={onFileSelected} />
      </Stack>
    </Container>
  );
};
