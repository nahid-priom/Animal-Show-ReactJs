import "./AnimalShow.css";
import { useState } from "react";
import { AnimalShow } from "./AnimalShow";

const getAnimal = () => {
  const Animal = ["cow", "bird", "cat", "dog", "gator", "heart", "horse"];
  return Animal[Math.floor(Math.random() * Animal.length)];
  
};



export const App = () => {

  

  const [animals, setAnimals] = useState([]);

  const handleCLick = () => {
    setAnimals ([...animals, getAnimal()])
  };

  const renderAnimal = animals.map((animal, index) => {
    
    return <AnimalShow type={animal} key= {index} />;
  });


  return (
    <div className="app">
      <button onClick={handleCLick}>Add Animal</button>
      <div className="animal-list">{renderAnimal}</div>
      
    </div>
  );
};
