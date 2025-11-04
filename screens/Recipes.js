import { useState , useEffect } from "react";
import { Text, TouchableOpacity, View, StyleSheet, FlatList, ScrollView } from "react-native";
import AddRecipes from "../components/AddReceitas";
import { getRecipes } from "../services/Recipes.service";
import { createRecipes } from "../services/Recipes.service";


const dados_fake = [
    {
        id: 1, 
        receita: 'Bolo de banana',
        modo_preparo: 'Mistura',
        ingredientes: 'Banana, caramelo, trigo e ovo',
        usuario_id: 1,
        categoria_id: 1
    },
    {
        id: 2, 
        receita: 'Bolo de morango',
        modo_preparo: 'Mistura',
        ingredientes: 'Morango, trigo e ovo',
        usuario_id: 1,
        categoria_id: 1
    }
]

export default function Receitas({ navigation }) {
    const [view, setView] = useState('list');
    const [recipes, setRecipes] = useState([])

    const carregar = async () => {
        const data = await getRecipes()
        setRecipes(data)
    }

    useEffect(() => {
        carregar()
      }, []);

    const renderItem = ({ item }) => {
        console.log(item)
        return (
            <View style={style.card}>
                <Text style={style.textButton}>
                    Titulo
                </Text>
                
                <Text style={style.cardItem}>
                    {item.receita}
                </Text>

                <Text style={style.textButton}>
                    ingredientes
                </Text>
                
                <Text style={style.cardItem}>
                    {item.ingredientes}
                </Text>

                <Text style={style.textButton}>
                    Modo de Preparo
                </Text>
                
                <Text style={style.cardItem}>
                    {item.modo_preparo}
                </Text>

                <TouchableOpacity style={style.button} onPress={() => navigation.goBack()}>
                        <Text style={style.textButton}>Editar</Text>
                    </TouchableOpacity>

                <TouchableOpacity style={style.button} onPress={() => navigation.goBack()} >
                        <Text style={style.textButton}>Deletar</Text>
                    </TouchableOpacity>
            </View>
        )
    }

    return (
        <ScrollView>
  
            <Text style={style.title}>
                Receitas
            </Text>

            {(view === 'list') ? (
                <View>
                    <TouchableOpacity style={style.button} onPress={() => setView('form')} >
                        <Text style={style.textButton}>Adicionar Receita</Text>
                    </TouchableOpacity>

                    <FlatList
                        data={recipes}
                        keyExtractor={item => item.id.toString()}
                        renderItem={renderItem}
                    />
                </View>
            ) : (
                <View>
                    <TouchableOpacity style={style.button} onPress={() => setView('list')} >
                        <Text style={style.textButton}>Ver Receita</Text>
                    </TouchableOpacity>

                    <AddRecipes></AddRecipes>
                </View>
            )}
        </ScrollView>
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
        color: '#FF0000',
        textAlign: 'center'
    },
    button: {
        backgroundColor: '#000',
        color: '#FFF',
        padding: 15,
        borderRadius: 10
    },
    textButton: {
        color: '#FFF',
        fontWeight: 'bold'
    },
    card:{
        backgroundColor:'#1a2b4a',
        padding:30,
        borderRadius: 10,
        marginBlock: 20
    },
    cardItem: {
        color:'#fff',
        marginBottom:10
    }
})