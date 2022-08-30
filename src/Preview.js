const Preview = ({name, number, month, year, cvc}) => {
    return (
        <div className="preview">
            <div className="preview__card preview__card--frontside">
                <div className="card__contents card__contents--frontside">
                    <img className="card__logo" src="images/card-logo.svg" alt="card_logo" />
                    <p className="card__number">
                        {number ? number : "0000 0000 0000 0000"}
                    </p>
                    <p className="card__holder">
                        { name !== "" ? name : "Jane Appleseed"}
                    </p>
                    <p className="card__date">{month !== "" ? month : "00"}/{year !== "" ? year : "00"}</p>
                </div>
            </div>

            <div className="preview__card preview__card--backside">
                <div className="card__contents card__contents--backside">
                    <p className="card__cvc">{cvc !== "" ? cvc : "000"}</p>
                </div>
            </div>
        </div>
    );
}

export default Preview;