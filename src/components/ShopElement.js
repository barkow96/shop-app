import Image from "./Image.js";
import { FaTimes } from "react-icons/fa";

const ShopElement = ({ key, basket, product, deleteProduct }) => {

    const id = basket.id;
    const quantity = basket.quantity;
    const price = product.price;
    const type = product.type;
    const description = product.description;
    const color = basket.color;

    return(
        <div className="shopElement">
            <div className="elementImage">
                <Image type={type} color={color} size={60}/>
            </div>
            <div className="elementDescription">
                <h2>{description}</h2>
                <p>{quantity} sztuk</p>
                <p>{quantity*price} PLN</p>
            </div>
            <button onClick={(e) => {deleteProduct(id,quantity)}}><FaTimes size={17} color="red"/></button>
        </div>
    );

};

export default ShopElement;