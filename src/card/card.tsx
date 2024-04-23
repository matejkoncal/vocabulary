import { Box, Container, Paper } from "@mui/material";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";

interface CardProps {
  top: string;
  bottom: string;
}

export const Card = ({ top, bottom }: CardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <Container style={{ maxWidth: "600px" }}>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <Paper elevation={3} onClick={() => setIsFlipped(!isFlipped)}>
          <Box padding="20px" justifyContent="center" alignItems="center" display="flex" height="300px">
            {top}
          </Box>
        </Paper>
        <Paper onClick={() => setIsFlipped(!isFlipped)}>
          <Box padding="20px" justifyContent="center" alignItems="center" display="flex" height="300px">
            {bottom}
          </Box>
        </Paper>
      </ReactCardFlip>
    </Container>
  );
};
