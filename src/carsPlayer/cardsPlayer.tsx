import { Button, Stack } from "@mui/material";
import { CardSource } from "../utils/utils";
import { Card } from "../card/card";
import { useState } from "react";

interface CardsPlayerProps {
  cardsSource: CardSource[];
}

export const CardsPlayer = ({ cardsSource }: CardsPlayerProps) => {
  const [selectedCard, setSelectedCard] = useState<CardSource>(cardsSource[0]);

  return (
    <Stack spacing={4} alignItems="center">
      <Card top={selectedCard.top} bottom={selectedCard.bottom} />
      <Stack width="600px" justifyContent="space-around" alignItems="center" direction="row">
        <Button
          sx={{
            "&:focus": {
              outline: "none",
            },
          }}
          onClick={() => {
            const previousIndex = cardsSource.indexOf(selectedCard) - 1;

            if (previousIndex === -1) {
              setSelectedCard(cardsSource[cardsSource.length - 1]);
            } else {
              setSelectedCard(cardsSource[previousIndex]);
            }
          }}
        >
          Previous
        </Button>
        <Button
          sx={{
            "&:focus": {
              outline: "none",
            },
          }}
          onClick={() => {
            const nextIndex = cardsSource.indexOf(selectedCard) + 1;

            if (nextIndex === cardsSource.length) {
              setSelectedCard(cardsSource[0]);
              return;
            } else {
              setSelectedCard(cardsSource[nextIndex]);
            }
          }}
        >
          Next
        </Button>
      </Stack>
    </Stack>
  );
};
