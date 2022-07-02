import React from "react";
import { Entypo } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Text, TouchableOpacity, View, Image, ScrollView } from "react-native";
import { Styles } from "./style";
import { Artistas } from "../../components/Artistas";
import Perfil from "../../../assets/Perfil.png";
import Lupa from "../../../assets/lupa.png";
import Mais from "../../../assets/mais.png";
import lil from "../../../assets/lil.jpg";
import adele from "../../../assets/adele.jpg";
import amy from "../../../assets/amy.jpg";
import charlie from "../../../assets/charlie.jpg";
import doja from "../../../assets/doja.jpg";
import eminem from "../../../assets/eminem.jpg";
import lady from "../../../assets/lady.jpg";
import lagum from "../../../assets/lagum.jpg";
import metallica from "../../../assets/metallica.jpg";
import oficinag3 from "../../../assets/oficinag3.jpg";
import pericles from "../../../assets/pericles.jpg";
import racionaismcs from "../../../assets/racionais.jpg";
import rihanna from "../../../assets/rihanna.jpg";
import Home from "../../../assets/home.png";
import Search from "../../../assets/search.png";
import Library from "../../../assets/Library.png";
import Premium from "../../../assets/Premium.png";
import { LinearGradient } from "expo-linear-gradient";

export const Biblioteca = () => {
  return (
    <View style={Styles.container}>
      <View style={Styles.header}>
        <View>
          <Image source={Perfil} style={Styles.foto} />
        </View>
        <Text style={Styles.texto}>Your Library</Text>
        <Image source={Lupa} style={Styles.icone} />
        <Image source={Mais} style={Styles.icone} />
      </View>
      <View style={Styles.categoria}>
        <Text style={Styles.itens}>Playlists</Text>
        <Text style={Styles.itens}>Artists</Text>
        <Text style={Styles.itens}>Podcasts & Shows</Text>
      </View>
      <ScrollView>
        <Artistas foto={lil} nome="Lil Nas X" />
        <Artistas foto={adele} nome="Adele" />
        <Artistas foto={amy} nome="Amy Winehouse" />
        <Artistas foto={charlie} nome="Charlie Brown Jr" />
        <Artistas foto={doja} nome="Doja Cat" />
        <Artistas foto={eminem} nome="Eminem" />
        <Artistas foto={lady} nome="Lady Gaga" />
        <Artistas foto={lagum} nome="Lagum" />
        <Artistas foto={metallica} nome="Metallica" />
        <Artistas foto={oficinag3} nome="Oficina G3" />
        <Artistas foto={pericles} nome="Péricles" />
        <Artistas foto={racionaismcs} nome="Racionais Mc's" />
        <Artistas foto={rihanna} nome="Rihanna" />
      </ScrollView>
        <View style={Styles.navbar}>
          <TouchableOpacity>
            <Image source={Home} style={Styles.nav} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={Search} style={Styles.nav} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={Library} style={Styles.lib} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={Premium} style={Styles.nav} />
          </TouchableOpacity>
        </View>
    </View>
  );
};
