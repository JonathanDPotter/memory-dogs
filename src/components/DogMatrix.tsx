import { Card } from "@material-tailwind/react";
import { Dispatch, FC, SetStateAction } from "react";
import api, { Dog } from "../api";

interface Props {
  dogs: Dog[];
  setDogs: Dispatch<SetStateAction<Dog[]>>;
  handleDogClick: (id: string) => void;
}

const DogMatrix: FC<Props> = ({ dogs, setDogs, handleDogClick }) => {

  const handleError = async (id: string) => {
    // I found that the api had many broken links, so I added this function to replace them

    const newDog = await api.getNewDog();
    
    setDogs(
      dogs.map((dog) => (dog.id === id ? { id: dog.id, url: newDog } : dog))
    );

    return newDog;
  };

  return (
    <div
      className={`grid grid-cols-4 gap-2 h-[90vh] ${
        dogs.length === 8
          ? "grid-rows-2"
          : dogs.length === 12
          ? "grid-rows-3"
          : "grid-rows-4"
      }`}
    >
      {dogs &&
        dogs.map((dog) => (
          <Card
            key={dog.id}
            onClick={() => handleDogClick(dog.id)}
            className={`bg-blue-gray-500`}
          >
            <img
              src={dog.url}
              onError={() => handleError(dog.id)}
              alt="dog"
              className="h-full object-cover object-center"
            />
          </Card>
        ))}
    </div>
  );
};
export default DogMatrix;
