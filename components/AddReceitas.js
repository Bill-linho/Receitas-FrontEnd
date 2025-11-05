import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View, StyleSheet, TextInput, Picker } from "react-native";
import { getUsers } from "../services/Users.service";
import { getCategories } from "../services/Category.service";

export default function AddRecipes({ navigation }) {

    const [nome, setNome] = useState('')
    const [ingredientes, setIngredientes] = useState('')
    const [modoPreparo, setModoPrepardo] = useState('')
    const [porcoes, setPocoes] = useState('')
    const [tempoPreparoMinutos, setTempoPreparoMinutos] = useState('')
    const [categoria, setCategoria] = useState([])
    const [users, setUsers] = useState([]) 
    const [userId, setUserId] = useState('')
    const [categoId, setCategoriesId] = useState('')

    useEffect(() => {
        loadusers()
        loadCategory()
    },[])

    async function  loadusers() {
        const data = await getUsers()
        setUsers(data)
    }

    async function  loadCategory() {
        const data = await getCategories()
        setCategoria(data)
    }

    function save() {
        const obj = {
            nome, ingredientes, modoPreparo

        }
    }

    return (
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

            <TextInput
                value={porcoes}
                onChangeText={setPocoes}
                placeholder='Digite quantidade de porções'
            />

            <TextInput
                value={tempoPreparoMinutos}
                onChangeText={setTempoPreparoMinutos}
                placeholder='Digite o tempo de preparo'
            />

            <Picker 
                selectedValue={userId}
                onValueChange={(item) => setUserId(item)}
            >
                <Picker.Item label="Selecione o Usuario" value=""/>

                {users.map((user)=>(
                 <Picker.Item
                    key={user.id}
                    label={user.nome}
                    value={user.id.toString()}
                 />              
                ))}

            </Picker>

            <Picker 
                selectedValue={categoId}
                onValueChange={(item) => setCategoriesId(item)}
            >
                <Picker.Item label="Selecione o Categoria" value=""/>

                {categoria.map((catego)=>(
                 <Picker.Item
                    key={catego.id}
                    label={catego.nome}
                    value={catego.id.toString()}
                 />              
                ))}

            </Picker>

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
    }
})