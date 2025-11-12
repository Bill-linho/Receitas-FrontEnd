import { useState, useEffect } from "react";
import { TouchableOpacity, View, Text, FlatList, ScrollView, Modal } from "react-native";
import { StyleSheet } from "react-native";
import { getCategories } from "../services/Category.service";
import AddCategory from "../components/AddCategory";
import { deleteCategorie } from "../services/Category.service";

export default function Categories({ navigation }) {
    const [view, setView] = useState('list')
    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState()
    const [isDeleteConfirm, setIsDeleteCofirm] = useState(false)

    const loadCategories = async () => {
        const data = await getCategories()
        setCategories(data);
    }

    useEffect(() => {
        loadCategories()
    }, [])

    const renderItem = ({ item }) => {
        console.log(item)
        return (
            <View style={style.card}>
                <Text style={style.textButton}>
                    Nome
                </Text>
                <Text style={style.cardItem}>
                    {item.nome}
                </Text>

                <TouchableOpacity style={style.button} onPress={() => {
                    setView('form')
                    setSelectedCategory(item)
                }}>
                    <Text style={style.textButton}>Editar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.button} onPress={() => {
                    setIsDeleteCofirm(true)
                    setSelectedCategory(item)
                }}>
                    <Text style={style.textButton}>Deletar</Text>
                </TouchableOpacity>

            </View>
        )

    }

    const onClose = () => {
        setIsDeleteCofirm(false)
    }

    const comfirmDelete = async () => {
        const response = await deleteCategorie(selectedCategory.id)
        onClose()
        loadCategories()
    }

    return (
        <ScrollView>

            <Modal visible={isDeleteConfirm} animationType="none" transparent={true} onRequestClose={onClose} >
                <View style={style.ModalContainer}>
                    <View style={style.modalView}>

                    <Text style={style.ModalText}>Tem certeza que quer continuar o procedimento?</Text>

                    <View style={style.ModaButtons}>
                        <TouchableOpacity onPress={onClose} style={style.closeButton}><Text>Cancelar</Text></TouchableOpacity>
                        <TouchableOpacity onPress={comfirmDelete} style={style.confirmButton}><Text>Comfirmar</Text></TouchableOpacity>
                    </View>
                    </View>
                </View>
            </Modal>

            {(view === 'list') ? (
                <View>
                    <TouchableOpacity style={style.button} onPress={() => setView('form')}>
                        <Text style={style.textButton}>Adicionar Categoria</Text>
                    </TouchableOpacity>

                    <FlatList
                        data={categories}
                        keyExtractor={item => item.id.toString()}
                        renderItem={renderItem}
                    />

                </View>
            ) : (
                <View>
                    <TouchableOpacity style={style.button} onPress={() => {
                        setView('list')
                        setSelectedCategory(null)
                        loadCategories()
                    }}>
                        <Text style={style.textButton}>VER Categorias</Text>
                    </TouchableOpacity>

                    <AddCategory categoryToEdit={selectedCategory}></AddCategory>
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
    },
    ModalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#99999999'
    },
    modalView: {
        margin: 20,
        backgroundColor: '#439',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 35,
        width: '90%'
    },
    ModalText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#FF0000',
        textAlign: 'center'
    },
    closeButton: {
        backgroundColor: '#000',
        padding: 15,
        borderRadius: 10
    },
    ModaButtons: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%'
    },
    confirmButton: {
        backgroundColor: '#203',
        padding: 15,
        borderRadius: 10
    },
    closeButton: {
        backgroundColor: '#634',
        padding: 15,
        borderRadius: 10
    },
})