import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Button,
} from "@material-tailwind/react";
import { Dispatch, FC, SetStateAction, useEffect } from "react";

interface Props {
  open: boolean;
  score: number;
  highScore: number;
  setHighScore: Dispatch<SetStateAction<number>>;
  reset: (getNewDogs: boolean) => void;
}

const Won: FC<Props> = ({ open, score, highScore, setHighScore, reset }) => {
  useEffect(() => {
    score > highScore && setHighScore(score);
  }, [open]);

  return (
    <Dialog open={open} handler={() => {}}>
      <DialogHeader>You Won!</DialogHeader>
      <DialogBody divider className="flex-1">
        <img
          src="https://cdn.memegenerator.es/imagenes/memes/full/31/82/31820286.jpg"
          alt="cat"
          className="h-[300px] mx-auto"
        />
      </DialogBody>
      <DialogFooter>
        <Button color="light-green" onClick={() => reset(true)}>
          Restart!
        </Button>
      </DialogFooter>
    </Dialog>
  );
};
export default Won;
