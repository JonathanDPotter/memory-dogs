import {
  Menu,
  MenuHandler,
  IconButton,
  MenuList,
  MenuItem,
  Switch,
} from "@material-tailwind/react";
import { ReactComponent as Hamburger } from "../assets/hamburgerIcon.svg";
import { Dispatch, FC, SetStateAction } from "react";

interface Props {
  setNumberOfDogs: Dispatch<SetStateAction<number>>;
  toggleDark: () => void;
  isDark: boolean;
  score: number;
  highScore: number;
}

const Header: FC<Props> = ({ setNumberOfDogs, score, highScore, toggleDark, isDark }) => {
  return (
    <header className="flex justify-between items-center p-4 border-b-2 h-[10vh]">
      <h1 className="font-sans text-5xl">Memory</h1>
      <p className="text-xl font-bold">Score: {score}</p>
      <p className="text-xl font-bold">High Score: {highScore}</p>
      <Switch onClick={toggleDark} defaultChecked crossOrigin={undefined} />
      <Menu placement="bottom-end">
        <MenuHandler>
          <IconButton variant="text" className="h-full">
            <Hamburger stroke={isDark ? "#fff" : "#000"} />
          </IconButton>
        </MenuHandler>
        <MenuList>
          <MenuItem onClick={() => setNumberOfDogs(8)}>8 dogs</MenuItem>
          <MenuItem onClick={() => setNumberOfDogs(12)}>12 dogs</MenuItem>
          <MenuItem onClick={() => setNumberOfDogs(16)}>16 dogs</MenuItem>
        </MenuList>
      </Menu>
    </header>
  );
};
export default Header;
