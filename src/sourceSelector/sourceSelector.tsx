import { Container, Stack } from "@mui/material";
import { SelectFileButton } from "../selectFileButton/selectFileButton";

export const SourceSelector = () => {
  return (
    <Container style={{ maxWidth: "600px" }}>
      <Stack spacing={2}>
        <SelectFileButton />
      </Stack>
    </Container>
  );
};
