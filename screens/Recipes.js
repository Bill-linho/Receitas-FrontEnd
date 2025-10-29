import { useState } from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

const dados_fake = [
    {id: 1,nome: 'Bolo de banana', modo_preparo: 'Mistura', ingredientes: 'Banana, caramelo, trigo e ovo', usuario_id:1, categoria_id:1 } ,
    {id: 2,nome: 'Bolo de morango', modo_preparo: 'Mistura', ingredientes: 'Morango, trigo e ovo', usuario_id:1, categoria_id:1}
]

export default function Receitas({navigation}) {
const [view, setView] = useState('');

 return(
        <View style={style.container}>
            <Text style={style.title}>
                Receitas
            </Text>

            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={style.button}>
                <Text style={style.textButton}>Voltar</Text>
            </TouchableOpacity>

            {(view === 'list') ? (
                <View>

                </View>
            ):(
                <View>

                </View>
            )}
            
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