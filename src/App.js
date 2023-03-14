import { useState } from "react";
import { AnimalShow } from "./AnimalShow";

const getAnimal = () => {
  const Animal = ["cow", "bird", "cat", "dog", "gator", "heart", "horse"];
  return Animal[Math.floor(Math.random() * Animal.length)];
  
};



export const App = () => {

  // starting login work

  const [animals, setAnimals] = useState([]);

  const handleCLick = () => {
    setAnimals ([...animals, getAnimal()])
  };

  const renderAnimal = animals.map((animal, index) => {
    
    return <AnimalShow type={animal} key= {index} />;
  });


  return (
    <div>
      <button onClick={handleCLick}>Add Animal</button>
      <div>{renderAnimal}</div>
      
    </div>
  );
};
