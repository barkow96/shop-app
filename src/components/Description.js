import { useState } from "react";

const Description = ( { id, description, price, quantity, addToBasket, color } ) => {

    const [qnt, setQnt] = useState(1);
    const handleSubmit = (e) => {
        e.preventDefault();
        addToBasket(id,qnt,color);
    }

    return (
        <div className="description">
            <h2>{description}</h2>
            <p>{price} PLN</p>
            <form onSubmit={handleSubmit}>
                <input className="input"type="number" min={0} max={quantity} value={qnt} onInput={(e) => setQnt(e.target.value)}/>
                <div className="quantity">z {quantity}</div>
                <input className="submit" type="submit" value="DODAJ"/>
            </form>
        </div>
    );
}

export default Description;