import React from 'react'
import { TouchableOpacity, Image, View} from "react-native";
import style from "./style";

const CardImage = props => {
    return (
        <TouchableOpacity 
            onPress={props.onPress}
            style={style.cardContainer}
        >
            <Image source={props.src} style={style.cardImage} />
        </TouchableOpacity>
    )
}

export default CardImage;