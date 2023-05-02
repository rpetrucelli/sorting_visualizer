import React, {useState} from "react";
import { createArray } from "./createArray";

function Sort(props) {
    const [arr, setArr] = useState(() => props.generator.next());

    const sort = () => {
        if (!arr.done){
        setArr(props.generator.next());
        }
    };

    const reset = () => {
        const newGen = props.alg(createArray(props.len));
        props.setGenerator(newGen);
        setArr(() => props.generator.next());
    }
    
    const { result, colors } = arr.value;
    
    return (
        <div className="body">
        <div className="toolbar">
            <button onClick={sort}>Next Step</button>
            <button onClicl={reset}>Reset</button>
        </div>
        <svg
            className="svg-content"
            preserveAspectRatio="none"
            height="100%"
            width="100%"
        >
            <rect x={0} y={0} height="100%" width="100%" fill="black" />
            {result.map((value, index) => {
            const height = `${(value/1000)*100}%`;
            const width = `${100 / result.length}%`;
            const x = `${(100*index) / result.length}%`;
            return (
                <rect
                stroke="black"
                strokeWidth={1} 
                key={index}
                fill={colors?.[index] ?? "white"}
                x={x}
                y={0}
                height={height}
                width={width}
                />
            );
            })}
        </svg>
        </div>
    );   
}

export default Sort;