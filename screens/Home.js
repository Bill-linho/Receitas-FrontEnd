import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

export default function Home({navigation}) {
    return(
        <View style={style.container}>
            <Text style={style.title}>
                Bem vindo!
            </Text>

            <TouchableOpacity onPress={() => navigation.navigate('Recipes')} style={style.button}>
                <Text style={style.textButton}>Ver Receitas</Text>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 28
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      color:'#FF0000',
      textAlign: 'center'
    },
    button:{
        backgroundColor: '#000',
        color: '#FFF',
        padding: 15,
        borderRadius: 10
    },
    textButton: {
        color: '#FFF',
        fontWeight: 'bold'
    }
  })