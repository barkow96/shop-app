import { useState, useEffect } from "react";

const ShopSummary = ({ products, basket }) => {
    const length = products.length;
    const [sum, setSum] = useState(0);
    let loopSum = 0;

    useEffect(() => {
        for (let i=0; i<length; i++) {
            loopSum = loopSum+products[i].price*basket[i].quantity;
        };

        setSum(loopSum);
    });


    return (
        <div className="shopSummary">
            W sumie: {sum} PLN
        </div>
    );

}

export default ShopSummary;