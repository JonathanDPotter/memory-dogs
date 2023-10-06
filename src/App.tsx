import { useEffect, useState } from "react";
import Welcome from "./components/Welcome";
import Header from "./components/Header";
import shuffle from "./utils/shuffle";
import Lost from "./components/Lost";
import Won from "./components/Won";
import api, { Dog } from "./api";
import DogMatrix from "./components/DogMatrix";

// TODO: make the score show highest score and current score instead

const App = () => {
  const [welcome, setWelcome] = useState(true);
  const [numberOfDogs, setNumberOfDogs] = useState(12);
  const [dogs, setDogs] = useState<Dog[]>([]);
  const [picked, setPicked] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [lost, setLost] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [won, setWon] = useState(false);

  const toggleDark = () => setIsDark((prev) => !prev);

  const handleDogClick = (id: string) => {
    picked.includes(id) ? setLost(true) : setPicked((prev) => [...prev, id]);
    setScore((prev) => prev + 1);
    setDogs((prev) => shuffle(prev));
  };

  const reset = (getNewDogs: boolean) => {
    setWon(false);
    setLost(false);
    setScore(0);
    setPicked([]);
    getNewDogs && getdogs();
  };

  const getdogs = async () => {
    setDogs(await api.getDogs(numberOfDogs));
  };

  useEffect(() => {
    getdogs();
  }, [numberOfDogs]);

  useEffect(() => {
    score === numberOfDogs && setWon(true);
  }, [score, numberOfDogs]);

  return (
    <div
      className={`h-screen flex flex-col ${
        isDark ? "bg-black text-white" : ""
      }`}
    >
      <Header {...{ score, highScore, setNumberOfDogs, toggleDark, isDark }} />
      <DogMatrix {...{ dogs, setDogs, handleDogClick }} />
      <Welcome open={welcome} handleOpen={() => setWelcome((prev) => !prev)} />
      <Lost open={lost} {...{ score, highScore, setHighScore, reset }} />
      <Won open={won} {...{ score, highScore, setHighScore, reset }} />
    </div>
  );
};
export default App;
