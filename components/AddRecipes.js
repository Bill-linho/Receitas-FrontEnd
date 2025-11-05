import { useEffect, useState } from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { Picker, TextInput } from "react-native";
import { getUsers } from "../services/Users.service";
import { getCategories } from "../services/Category.service";
import { createRecipe } from "../services/Recipes.service";

export default function AddRecipes() {
    const [nome, setNome] = useState('')
    const [ingredientes, setIngredientes] = useState('')
    const [modoPreparo, setModoPreparo] = useState('')
    const [porcoes, setPorcoes] = useState('')
    const [tempoPreparoMinutos, setTempoPreparoMinutos] = useState('')
    const [categories, setCategories] = useState([]);
    const [users, setUsers] = useState([]);
    const [userId, setUserId] = useState('')
    const [categoryId, setCategoryId] = useState('')

    useEffect(() => {
        loadUsers()
        loadCategories()
    }, [])

    async function loadUsers() {
        const data = await getUsers()
        console.log('DATA',data);
        
        setUsers(data)
    }

    async function loadCategories() {
        const data = await getCategories()
        setCategories(data)
    }

    async function save() {
        const obj = {
            nome, 
            ingredientes,
            modo_preparo: modoPreparo,
            porcoes: parseInt(porcoes),
            tempo_preparo_minutos: parseInt(tempoPreparoMinutos),
            usuario_id: parseInt(userId),
            categoria_id: parseInt(categoryId)
        }

        console.log(response);
        try {
            clearForm()
            const response = await createRecipe(obj)
        } catch {
            
        }
        
    }

    function clearForm() {
        setNome('')
        setCategoryId('')
        setUserId('')
        setModoPreparo('')
        setTempoPreparoMinutos('')
        setPorcoes('')
        setIngredientes('')
    }

    return (
        <View style={style.container}>
            <Text style={style.title}>
                Adicionar nova receita
            </Text>

            <TextInput
                value={nome}
                onChangeText={setNome}
                placeholder="Digite o nome.."
            />
            <TextInput
                value={ingredientes}
                onChangeText={setIngredientes}
                placeholder="Digite os ingrediêntes.."
            />
            <TextInput
                value={modoPreparo}
                onChangeText={setModoPreparo}
                placeholder="Digite o modo de preparo.."
            />

            <TextInput
                value={porcoes}
                onChangeText={setPorcoes}
                placeholder="Digite a quantidade de Porções.."
            />

            <TextInput
                value={tempoPreparoMinutos}
                onChangeText={setTempoPreparoMinutos}
                placeholder="Digite o tempo de preparo em minutos.."
            />

            <Picker
                selectedValue={userId}
                onValueChange={(item) => setUserId(item)}
            >
                <Picker.Item label="Selecione o Usuario" value=""/>
                {users.map((user) => (
                    <Picker.Item
                        key={user.id}
                        label={user.nome}
                        value={user.id.toString()}
                    />
                ))}
               
            </Picker>

            <Picker
                selectedValue={categoryId}
                onValueChange={(item) => setCategoryId(item)}
            >
                <Picker.Item label="Selecione a Categoria" value=""/>
                {categories.map((category) => (
                    <Picker.Item
                        key={category.id}
                        label={category.nome}
                        value={category.id.toString()}
                    />
                ))}
               
            </Picker>

            <TouchableOpacity 
                style={style.button}
                onPress={save}>

                <Text style={style.textButton}>
                    Salvar
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
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
        color: '#fff',
        fontWeight: 'bold'
    }
})