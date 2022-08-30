const FormFrontside = ({setName, number, setNumber, setMonth, setYear, setCvc, setResult}) => {
    const handleNumber = (userInput) => {
        // this prevents user from typing non digit characters
        let cardNumber = userInput.replace(/[^\d]/g, "");

        // this slices the card number into sections
        let formattedCardNumber = cardNumber.match(/\d{1,4}/g);
        
        if (formattedCardNumber !== null) {
            formattedCardNumber = formattedCardNumber.join(" ");
        } else {
            formattedCardNumber = "";
        }

        setNumber(formattedCardNumber);
    }

    const inputs = document.getElementsByTagName("input");

    const handleConfirm = (e) => {
        // this prevents the form from submitting
        e.preventDefault();

        // this checks which inputs are filled correctly
        let inputValues = []
        for(let i=0; i<5; i++) {
            inputValues.push(inputs[i].validity.valid)
        }

        // this returns true if all inputs are ok
        const result = inputValues.reduce((a, b) => {
            return a && b;
        });

        if (result) {
            setResult(result);
        }
    }

    return (
        <form className="form__frontside" id="form">
            <label className="form__label" htmlFor="name">CARDHOLDER NAME</label>
            <input className="form__input" placeholder="e.g. Jane Appleseed" id="name" type="text" maxLength={21} required onInput = {(e)=> {setName(e.target.value)}} /> 
            
            <label className="form__label" htmlFor="number">CARD NUMBER</label>
            <input className="form__input" placeholder="e.g. 1234 5678 9123 0000" id="number" type="tel" minLength={19} maxLength={19} value={number} required onInput = {(e) => {handleNumber(e.target.value)}} /> 
            
            <fieldset className="form__fieldset">
                <legend className="form__legend">EXP. DATE (MM/YY)</legend>
                <input className="form__input form__input--date" placeholder="MM" id="month" type="tel" minLength={2} maxLength={2} pattern="[0-9]{2}" required onInput={(e)=> {setMonth(e.target.value)}} /> 
                <input className="form__input form__input--date" placeholder="YY" id="year" type="tel" minLength={2} maxLength={2} pattern="[0-9]{2}" required onInput={(e)=> {setYear(e.target.value)}} /> 
            </fieldset>

            <label className="form__label form__label--cvc" htmlFor="cvc">CVC</label>
            <input className="form__input form__input--cvc" placeholder="e.g. 123" id="cvc" type="tel" minLength={3} maxLength={3} pattern="[0-9]{3}" required onInput={(e)=> {setCvc(e.target.value)}} /> 
            
            <button className="form__button" id="confirmBtn" onClick={(e)=>{handleConfirm(e)}}>Confirm</button>
        </form>
    );
}

export default FormFrontside;