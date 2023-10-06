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

const Lost: FC<Props> = ({ open, score, highScore, setHighScore, reset }) => {
  useEffect(() => {
    score > highScore && setHighScore(score - 1);
  }, [open]);

  return (
    <Dialog open={open} handler={() => {}}>
      <DialogHeader>You Lost!</DialogHeader>
      <DialogBody divider className="flex-1">
        <p>Your Score was {score - 1}</p>
      </DialogBody>
      <DialogFooter>
        <Button color="light-green" onClick={() => reset(false)}>
          Restart!
        </Button>
      </DialogFooter>
    </Dialog>
  );
};
export default Lost;
