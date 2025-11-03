import { useState } from "react";
import { Text, TouchableOpacity, View, StyleSheet,TextInput } from "react-native";

export default function AddRecipes({navigation}) {

    const [nome,setNome] = useState('')
    const [ingredientes, setIngredientes] = useState('')
    const [modoPreparo, setModoPrepardo] = useState('')

    function save() {
        const obj = {
            nome,ingredientes,modoPreparo

        }
    }

    return(
        <View style={style.container}>
            <Text style={style.title}>
                Adicionar nova receita
            </Text>

            <TextInput
             value={nome}
             onChangeText={setNome}
             placeholder='Digite o nome'
            />

            <TextInput
             value={ingredientes}
             onChangeText={setIngredientes}
             placeholder='Digite os ingredientes'
            />

            <TextInput
             value={modoPreparo}
             onChangeText={setModoPrepardo}
             placeholder='Digite o modo de preparo'
            />

            <TouchableOpacity onPress={() => save()} style={style.button}>
                <Text style={style.textButton}>Salvar</Text>
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