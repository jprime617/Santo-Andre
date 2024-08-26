import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput, Image, StatusBar, Animated, Easing, Modal } from 'react-native';


const App = () => {

    const [saldo, setSaldo] = useState(100);
    const [num, setNum] = useState("")
    const [modalvisivel, setModalvisivel] = useState(false)
    

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#000000',
            justifyContent: 'center',
            alignItems: 'center'
          },
        image: {
            width: 300,
            height: 100,
        },
        fontTitulo: {
            color: '#ffffff'
        },
        fontSal: {
            color: '#ffffff',
            fontSize: 50
        },
        fontDes: {
            color: '#ffffff',
            width: 220
        },
        input: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            backgroundColor: '#ffffff'
        },
        button: {
            
        }
    })

    const sacar = function () {
        var numero = parseFloat(num)
        if (numero > saldo || numero < 1 || num === ""){
            return console.log("CALMA LA PAIZAO")
        }
        var oi1 = saldo - numero
        var taxa = oi1 * 0.025
        total = numero + taxa
        console.log(total)
        setSaldo(saldo - total)
        setNum("")
        
        
    }

    const depositar = function () {
        var numero = parseFloat(num)
        if (numero < 1 || num === ""){
            return console.log("CALMA LA PAIZAO")
        }
        taxa = numero * 0.01
        total = numero + taxa
        console.log(total)
        setSaldo(saldo + total)
        setNum("")
    }
    
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'#000000'} />
            <Image
                style={styles.image}
                source={{
                    uri: 'https://www.itapevarec.com.br/Nembus/Images/logo-santander-transparent.png'
                }}
            />
            <Text style={styles.fontTitulo}>SALDO ATUAL NA CONTA</Text>
            <Text style={styles.fontSal}>R$ {saldo.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</Text>
            <Text style={styles.fontDes}>Digite o Valor Abaixo e Escolha uma Das Operações Bancárias:</Text>
            <TextInput
                style={styles.input}
                placeholder="0,00"
                keyboardType="numeric"
                onChangeText={setNum}
                value={num}
            />
            <Button
                title="Sacar"
                color={'#F21628'}
                onPress={sacar}
            />
            <Button
                style={styles.button}
                color={'#F21628'}
                title="Depositar"
                onPress={depositar}
            />
            <Modal
                animationType="fade"
                visible={modalvisivel}
                transparent={true}
            >
                <Text style={styles.fontSal}>OLHA O MODEL AI</Text>
                
            </Modal>
        </View>
    )

    
};

export default App