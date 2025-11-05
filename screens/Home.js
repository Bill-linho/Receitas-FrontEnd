import { TouchableOpacity, View, Text, StyleSheet } from "react-native";


export default function Home({navigation}) {
    return (
        <View style={style.container}>
            <Text style={style.title}>
                Bem vindo!
            </Text>

            <TouchableOpacity 
            style={style.button}
            onPress={() => navigation.navigate('Recipes')}>
                <Text style={style.textButton}>
                    Ver Receitas
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