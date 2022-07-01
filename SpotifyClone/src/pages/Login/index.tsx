import React from "react";
import { Text, TextInput, TextInputBase, TouchableOpacity, View } from "react-native";
import { Styles } from "./style";
export const Login = ()=>{
    return (
        <View style={Styles.container}> 
        <Text style={Styles.texto}>Email or username</Text>
        <TextInput style={Styles.input}/>
        <Text style={Styles.texto}>Password</Text>
        <TextInput style={Styles.input}/>
        <TouchableOpacity style={Styles.botao}>
            <Text style={{color:"#3f3f3f", fontWeight: "bold"}}>Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.botao2}>
            <Text style={{color:"#fff"}}>Log in without password</Text>
        </TouchableOpacity>
        </View>
    )
}