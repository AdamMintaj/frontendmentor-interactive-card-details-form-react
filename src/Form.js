import FormFrontside from "./FormFrontside";
import FormBackside from "./FormBackside";
import { useState } from "react";

const Form = ({setName, number, setNumber, setMonth, setYear, setCvc}) => {
    const [result, setResult] = useState(false);

    return (
        <div className="form">
            <div className="form__wrapper" style={ result ? {transform: "rotateY(180deg)"} : null}>
                <FormFrontside 
                    setName = {setName}
                    number = {number}
                    setNumber = {setNumber}
                    setMonth = {setMonth}
                    setYear = {setYear}
                    setCvc = {setCvc}
                    setResult = {setResult}
                />
                <FormBackside />
            </div>
        </div>
    );
}

export default Form;