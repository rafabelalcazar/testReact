import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.topScreen}>
        <Text>Hola pantalla 1</Text>
      </View>
      <View style={styles.centerScreen}>
        <View style={[styles.btn,{backgroundColor:'yellow'}]} >
          <Text>boton1</Text>
        </View>
        <View style={{backgroundColor: 'gray',flex:1, justifyContent:'center',alignItems:'center'}} >
          <Text>boton2</Text>
        </View>
      </View>
      <View style={styles.bottomScreen}>
        <Text>Hola pantalla 2</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red"
  },
  topScreen:{
    flex: 1,
    width:'100%',
    backgroundColor: "blue"
  },
  centerScreen:{
    flex: 1,
    width:'100%',
    backgroundColor: "green",
    flexDirection: 'row'
  },
  bottomScreen:{
    flex: 1,
    width:'100%',
    backgroundColor:'white'
  },
  btn:{
    backgroundColor: 'yellow',
    flex:1, 
    justifyContent:'center',
    alignItems:'center'
  },











  button: {
    backgroundColor: "#345678",
    borderRadius: 10
  },
  textButton: {
    color: "white",
    margin: 10
  },
  textButtonLink: {
    color: "#3456ff",
    fontSize: 30
  }
});
