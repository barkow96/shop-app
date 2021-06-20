import Image from "./Image.js";
import Description from "./Description.js";

const Product = ( { art, addToBasket } ) => {
    const size = 150;
    const artId = art.id;
    const artType = art.type;
    const artDescription = art.description;
    const artPrice = art.price;
    const artQuantity = art.quantity;
    const color = art.color;

    const product_none = artQuantity===0 ? {color: "red"} : {};

    return(
        <div className='product' style={product_none}>
            <div className="img">
                <Image type={artType} color={color} size={size}/>
            </div>
            <Description
                id={artId}
                description={artDescription}
                price={artPrice}
                quantity={artQuantity}
                addToBasket={addToBasket}
                color={color}/>
        </div>
    );
}

export default Product;