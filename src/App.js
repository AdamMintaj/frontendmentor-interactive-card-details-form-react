import "./App.css";
import Form from "./Form";
import Preview from "./Preview";
import Footer from "./Footer";
import { useState } from "react";

function App() {
	const [name, setName] = useState("");
	const [number, setNumber] = useState("");
	const [month, setMonth] = useState("");
	const [year, setYear] = useState("");
	const [cvc, setCvc] = useState("");

	return (
		<div className="App">
			<Preview 
				name = {name}
				number = {number}
				month = {month}
				year = {year}
				cvc = {cvc}
			/>
			<Form 
				setName = {setName}
				number = {number}
				setNumber = {setNumber}
				setMonth = {setMonth}
				setYear = {setYear}
				setCvc = {setCvc}
			/>
			<Footer />
		</div>
	);
}

export default App;
