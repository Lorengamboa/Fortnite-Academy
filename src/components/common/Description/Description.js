import React from 'react'
import { Text, View} from "react-native";
import style from "./style";

const Description = props => {
    return (
        <View style={style.container}>
        <View style={{flexDirection: 'row'}}>
            <Text h1 style={style.title}>{props.title}</Text>
        </View>
            <Text h3 style={style.info}>{props.info}</Text>
        </View>
    )
}

export default Description;