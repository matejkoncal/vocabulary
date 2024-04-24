import { Button, Container, Dialog, Stack, TextField } from "@mui/material";
import { SelectFileButton } from "../selectFileButton/selectFileButton";
import { CardSource, parseSourcedFile } from "../utils/utils";
import { AsyncTextFileReader } from "../asyncTextFileReader/asyncTextFileReader";
import { useState } from "react";
import { getVocabularySourceByAi } from "../firebaseFunctions";
import { LoadingButton } from "@mui/lab";

interface SourceSelectorProps {
  onFileSelected?: (source: CardSource[]) => void;
}

export const SourceSelector = ({ onFileSelected }: SourceSelectorProps) => {
  const [dialogVisible, setDialogVisible] = useState(false);
  const [topSideLanguage, setTopSideLanguage] = useState("");
  const [bottomSideLanguage, setBottomSideLanguage] = useState("");
  const [topic, setTopic] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <Container style={{ maxWidth: "600px" }}>
      <Stack spacing={2}>
        <SelectFileButton
          onFileSelected={file => {
            const fileReader = new AsyncTextFileReader();
            fileReader.read(file).then(text => {
              const source = parseSourcedFile(text);
              onFileSelected?.(source);
            });
          }}
        />
        <Button
          variant="outlined"
          sx={{
            "&:focus": {
              outline: "none",
            },
          }}
          onClick={() => {
            setDialogVisible(true);
          }}
        >
          Use AI
        </Button>
      </Stack>
      <Dialog PaperProps={{ style: { padding: "20px" } }} open={dialogVisible} onClose={() => setDialogVisible(false)}>
        <Stack spacing={2}>
          <TextField disabled={loading} value={topSideLanguage} onChange={e => setTopSideLanguage(e.target.value)} label="Top side language" />
          <TextField
            disabled={loading}
            value={bottomSideLanguage}
            onChange={e => setBottomSideLanguage(e.target.value)}
            label="Bottom side language"
          />
          <TextField disabled={loading} value={topic} onChange={e => setTopic(e.target.value)} label="Topic" />
          <LoadingButton
            loading={loading}
            variant="outlined"
            sx={{
              "&:focus": {
                outline: "none",
              },
            }}
            onClick={() => {
              setLoading(true);
              getVocabularySourceByAi(topSideLanguage, bottomSideLanguage, topic).then(source => {
                onFileSelected?.(source);
                setLoading(false);
              });
            }}
          >
            Generate
          </LoadingButton>
        </Stack>
      </Dialog>
    </Container>
  );
};
