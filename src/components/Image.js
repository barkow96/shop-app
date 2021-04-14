import { componentsMap } from "./Images.js";
import { useEffect } from "react";

const Image = ( { type, color, size } ) => {
    const style = {
        color: color,
        cursor: "pointer"
    }

    //const componentsMap = [ FaBiking, FaBowlingBall, FaSnapchatGhost, FaBabyCarriage, FaBaby, FaEgg ];
    //let DynamicImage = FaBiking;
    let DynamicImage;
    for (let component of componentsMap) if (component.name === type) DynamicImage = component;

    useEffect(() => {
        console.log("IMAGE");
    });

    return(
         <DynamicImage size={size} style={style}/>
    );
}

export default Image;