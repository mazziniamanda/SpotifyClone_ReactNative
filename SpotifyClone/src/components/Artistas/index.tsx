import React from "react";
import { Image, View,Text } from "react-native";
import { Styles } from "./style";

interface Card{
    foto:any;
    nome:string;
}

export const Artistas =({foto,nome}:Card) =>{
    return(
        <View>
        <View style={Styles.card}>
            <Image source={foto} style={Styles.foto}/>
            <Text style={Styles.nome}>{nome}{'\n'}<Text style={Styles.artista}>Artist</Text>
</Text>
        </View>
       
        </View>
        )
}