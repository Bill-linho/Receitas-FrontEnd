import { useState, useEffect } from "react";
import { TouchableOpacity, View, Text, FlatList, ScrollView, Modal } from "react-native";
import { StyleSheet } from "react-native";
import { getUsers } from "../services/Users.service";
import AddUsers from "../components/AddUsers";

export default function Users({navigation}) {
    const [view, setView] = useState('list')
    const [users, setUsers] = useState([])
    const [selectedUser, setSelectedUser] = useState()

    const loadUsers = async () => {
        const data = await getUsers()
        setUsers(data);
    }

    useEffect(() => {
        loadUsers()
    }, [])

    const renderItem = ( { item } ) => {
        console.log(item)
        return (
            <View style={style.card}>
                <Text style={style.textButton}>
                    Nome
                </Text>
                <Text style={style.cardItem}>
                    {item.nome}
                </Text>

                <Text style={style.textButton}>
                    E-mail
                </Text>
                <Text style={style.cardItem}>
                    {item.email}
                </Text>

                <Text style={style.textButton}>
                    Telefone
                </Text>
                <Text style={style.cardItem}>
                    {item.telefone}
                </Text>

                <TouchableOpacity style={style.button} onPress={() => {
                    setView('form')
                    setSelectedUser(item)
                }}>
                    <Text style={style.textButton}>Editar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.button} onPress={() => {

                }}>
                    <Text style={style.textButton}>Deletar</Text>
                </TouchableOpacity>

            </View>
        )

    }

    return (
        <ScrollView>

            {(view === 'list') ? (
                <View>
                    <TouchableOpacity style={style.button} onPress={() => setView('form')}>
                        <Text style={style.textButton}>Adicionar Usuario</Text>
                    </TouchableOpacity>

                    <FlatList
                        data={users}
                        keyExtractor={item => item.id.toString()}
                        renderItem={renderItem}
                    />

                </View>
            ) : (
                <View>
                    <TouchableOpacity style={style.button} onPress={() => {
                        setView('list'),
                        setSelectedUser(null)
                        loadUsers()
                    }}>
                        <Text style={style.textButton}>VER Usuarios</Text>
                    </TouchableOpacity>

                    <AddUsers UserToEdit={selectedUser}></AddUsers>
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
    },
    card: {
        backgroundColor: '#1a2b4a',
        padding: 30,
        borderRadius: 10,
        marginBottom: 20
    },
    cardItem: {
        color: '#fff',
        marginBottom: 10
    }
})