import { useEffect, useState } from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { Picker, TextInput } from "react-native";
import { createUser, getUsers, updateUser } from "../services/Users.service";
import { getCategories } from "../services/Category.service";
import { createRecipe } from "../services/Recipes.service";

// "nome": "João",
// "senha": "123",
// "email": "marcos@gmail.com",
// "telefone": "(48) 9 9999-9999"

export default function AddUsers({UserToEdit}) {
    const [nome,setNome] = useState('')
    const [senha,setSenha] = useState('')
    const [email,setEmail] = useState('')
    const [telefone,setTelefone] = useState('')
    const [editingId, setEditingId] = useState()


    useEffect(() => {
        if(UserToEdit){
            setNome(UserToEdit.nome)
            setSenha(UserToEdit.senha)
            setEmail(UserToEdit.email)
            setTelefone(UserToEdit.telefone)
            setEditingId(UserToEdit.id)
        }else{
            clearForm()
        }
    }, [UserToEdit])

    async function save() {
        const obj = {
            nome, 
            senha,
            email,
            telefone,
            ativo:true
        }

        try {
              clearForm()
              if (editingId) {
  
                  const response = await updateUser(editingId, obj)
              } else {
                  const response = await createUser(obj)
              }
          } catch {
  
          }
        
    }
    

    function clearForm() {
        setNome('')
        setSenha('')
        setEmail('')
        setTelefone('')
    }

    return (
        <View style={style.container}>
            <Text style={style.title}>
                Adicionar o Usuario
            </Text>

            <TextInput
                value={nome}
                onChangeText={setNome}
                placeholder="Digite seu nome..."
            />
            <TextInput
                value={senha}
                onChangeText={setSenha}
                placeholder="Digite sua senha..."
            />
            <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="Digite o seu e-mail..."
            />

            <TextInput
                value={telefone}
                onChangeText={setTelefone}
                placeholder="Digite o telefone..."
            />

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