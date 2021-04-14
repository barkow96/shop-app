import { FaShoppingBasket } from "react-icons/fa";

const ShopButton = ({ toggleBasket }) => {
    const size=100;

    return(
        <div className="basketLogo" onClick={() => toggleBasket()}>
            <div className="logoImage">
                <FaShoppingBasket size={size} color="black"/>
            </div>
            <div className="logoText">TWOJE ZAKUPY</div>
        </div>
    );

}

export default ShopButton;