/* 1- vamos adicionar os componentes ImageBrackground,
statusBar para mostrar a barra de status, 
safeAreaView para cirar o espaço para a barra de status,
vamos adicionar a lib maps
 expo install react-native-maps 
Vamos add a axios para fazer a ligação entre a  api e nossa aplicação
"yarn add axios" ou "npm add axios" */
import axios from "axios";
import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  StatusBar,
  SafeAreaView,
  Platform,
  Alert,
  Image
} from "react-native";
import MapView, {Marker} from "react-native-maps";


export default class LocalizacaoScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            location:{}
        };       
    }
    componentDidMount(){
        this.getIssLocation()
    }

    getIssLocation = () =>{
        axios.get("https://api.wheretheiss.at/v1/satellites/25544").then(
            response=> {
                this.setState({
                    location:response.data})
                })
                .catch(error => {
                    Alert.alert(error.message)
                })
         
    }
  render() {
    /* 3- Object.Keys() é um método JavaScript amplamente utilizado que retorna uma
matriz com todas as chaves de um objeto*/
    if(Object.keys(this.state.location).length === 0){
        return (
            <View 
                style={{
                    flex:1,
                    justifyContent:"center",
                    alignItems:"center"
                }}>
                    <Text>Carregando...</Text>
                </View>
        )
    }
    //-2 criar as configurações da tela
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <ImageBackground
          source={require("../assets/bg.png")}
          style={styles.bgImg}
        >
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Localização da EEI</Text>
          </View>
            <View style={styles.mapContainer}>
            <MapView style={styles.map}
            region={{
            latitude:this.state.location.latitude,
            longitude:this.state.location.longitude,
            latitudeDelta:100,
            longitudeDelta: 100

          }}> 
          <Marker
             coordinate={{latitude: this.state.location.latitude,
                          longitude: this.state.location.longitude}}>
                <Image source={ require('../assets/iss_icon.png')} style={{height:50, width:50}}/>

            </Marker>
          </MapView>

            </View>
        {/*atv aluno 1 */}
        <View style ={styles.infoContainer}>
            <Text style={styles.infoText}>
                Latitude:{this.state.location.latitude}
            </Text>
            <Text style={styles.infoText}>
                Longitude:{this.state.location.longitude}
            </Text>
            <Text style={styles.infoText}>
                Altitude(KM):{this.state.location.altitude}
            </Text>
            <Text style={styles.infoText}>
                Velocidade(KM/H):{this.state.location.velocity}
            </Text>
        </View>
         
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
  bgImg: {
    flex: 1,
    resizeMode: "cover",
  },
  titleContainer:{
    flex:0.1,
    justifyContent:"center",
    alignItems:"center"
  },
  titleText:{
    fontSize:30,
    fontWeight:"bold",
    color:'white'
  },
  mapContainer:{
    flex:0.6
  },
  map:{
    width:"100%",
    height:"100%"
  },
  infoContainer:{
    flex:0.2,
    backgroundColor:"#fff",
    marginTop:10,
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    padding:30

  },
  infoText:{
    fontSize:15,
    color:"#000",
    fontWeight:"bold"
  }
});
