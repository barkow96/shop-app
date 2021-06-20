import { componentsMap } from "./Images.js";

const Image = ( { type, color, size } ) => {
    const style = {
        color: color,
        cursor: "pointer"
    }

    let DynamicImage;
    for (let component of componentsMap) if (component.name === type) DynamicImage = component;

    return (
        <DynamicImage size={size} style={style}/>
    );
}

export default Image;