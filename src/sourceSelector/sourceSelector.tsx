import { Button, Container, Stack, Typography } from "@mui/material";
import { SelectFileButton } from "../selectFileButton/selectFileButton";

interface SourceSelectorProps {
  onFileSelected?: (file: File) => void;
}

export const SourceSelector = ({ onFileSelected }: SourceSelectorProps) => {
  return (
    <Container style={{ maxWidth: "600px" }}>
      <Stack spacing={2}>
        <SelectFileButton onFileSelected={onFileSelected} />
        <Typography display="flex" alignItems="center" justifyContent="center" variant="h5">
          or
        </Typography>
        <Button variant="outlined">Generate by AI</Button>
      </Stack>
    </Container>
  );
};
