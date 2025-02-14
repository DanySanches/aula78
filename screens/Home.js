import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  StatusBar,
  ImageBackground,Image
} from "react-native";

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
       
        <SafeAreaView style={styles.droidSafeArea} />
    
        <ImageBackground source={require("../assets/bg.png")} style={styles.bg}>
          <View style={styles.titleBar}>
            <Text style={styles.titleText}>App Rastreador EEI</Text>
          </View>
        
          <TouchableOpacity style={styles.routeCard} onPress={()=>this.props.navigation.navigate("Localização")}>
            <Text style={styles.routeText}>Localização da {'\n'}EEI</Text>
            <Text style={styles.knwoMore}>{"Saiba mais --->"}</Text>
            <Text style={styles.bgDigit}>1</Text>
            <Image source={require("../assets/iss_icon.png")} style={styles.iconImage}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.routeCard}  onPress={()=>this.props.navigation.navigate("Meteoro")}>
            <Text style={styles.routeText}>Meteoros</Text>
            <Text style={styles.knwoMore}>{"Saiba mais --->"}</Text>
            <Text style={styles.bgDigit}>2</Text>
            <Image source={require("../assets/meteor_icon.png")} style={styles.iconImage}></Image>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  bg: {
    flex: 1,
    resizeMode: 'stretch',
  },
  titleBar: {
    flex: 0.25,
    justifyContent: "center",
    alignItems: "center",
  },
  titleText:{
    fontSize:40,
    fontWeight:'bold',
    color:'#FFA2FF'
  },
  routeCard: {
    flex: 0.25,
    marginLeft: 50,
    marginTop: 50,
    marginRight: 50,
    borderRadius: 30,
    backgroundColor: "#FFF",
  },
  routeText: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 75,
    paddingLeft: 30,
  },
  knwoMore:{
    paddingLeft:30,
    color:'red',
    fontSize:15
  },
  bgDigit:{
    position: "absolute",
    color:"rgba(183,183,183,0.5)",
    fontSize:150,
    right:20,
    bottom:-15,
    zIndex:-1
},
iconImage:{
    position:'absolute',
    height:200,
    width:200,
    resizeMode:"contain",
    right:20,
    top:-80
}

});
