const BASE_URL = "https://dog.ceo/api/breeds/image/random/";

export interface Dog {
  id: string;
  url: string;
}

const getDogs = async (numberOfDogs: number) => {
  // get an array of dogs to fill the screen with
  try {
    const response = await fetch(BASE_URL + numberOfDogs.toString());
    const json = await response.json();

    const dogObject = json.message.map((url: string, i: number) => {
      return { id: `dog${i}`, url };
    }) as Dog[];

    return dogObject;
  } catch (error: any) {
    throw new Error(error);
  }
};

const getNewDog = async () => {
  // get one dog to replace a broken link
  try {
    const response = await fetch(BASE_URL + "1");
    const json = await response.json();
    return json.message[0];
  } catch (error: any) {
    throw new Error(error);
  }
};

const api = { getDogs, getNewDog };

export default api;
