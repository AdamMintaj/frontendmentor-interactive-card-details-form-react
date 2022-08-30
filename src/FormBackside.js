const FormBackside = () => {
    return (
        <div className="form__backside">
            <img className="form__successImg" src="images/icon-complete.svg" alt="success" />
            <h2 className="form__successMessage">THANK YOU!</h2>
            <p>We've added your card details</p>
            <button className="form__button" id="continueBtn" form="form" value="Submit">Continue</button>
        </div>
    );
}

export default FormBackside;