import React from "react";
import { View,Text, TextInput } from "react-native";
import styles from "./styles";

const CustomEditText=(props)=>{

    const {title,onChange,maxLength,keyboardType}=props
return(
    <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <TextInput style={[styles.textInput]} maxLength={maxLength} placeholder={title} onChangeText={onChange}  keyboardType={keyboardType}
></TextInput>
    </View>
)
}

export default CustomEditText