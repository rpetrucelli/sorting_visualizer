import { useState } from "react";
import Sort from "./components/Sort";
import { bubbleSort } from "./components/algorithms/bubbleSort.js";
import { mergeSort } from "./components/algorithms/mergeSort.js";
import { createArray } from "./components/createArray.js";


export default function App() {
  const [len, setLen]= useState(10);
  const [alg, setAlg] = useState(bubbleSort);
  const [generator, setGenerator] = useState(mergeSort(createArray(10)));

  const numHandler = (e) =>{
    e.preventDefault();
    setLen(e.target.value);
  }

  const changeHandler = (e) => {
    e.preventDefault();
    setAlg(e.target.value);
    setGenerator(alg(createArray(len)));
  };

  
  return (
    <div className="page">
      <form>
        <label htmlFor="num">Enter the length of the Array to be sorted</label>
        <input value={len} onChange={numHandler} type="number"/>
        
        <label htmlFor="select">Select a Sorting Algorithm</label>
        <select id="select" className="selector" onChange={changeHandler}>
          <option value={bubbleSort}>Bubble Sort</option>
          <option value={mergeSort}>Merge Sort</option>
        </select>
      </form>
      { (generator !== null) ? <Sort value={{generator, setGenerator, len, alg}}/> : <></> }
    </div>
  );
}