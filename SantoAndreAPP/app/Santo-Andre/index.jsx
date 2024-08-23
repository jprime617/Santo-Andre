import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput, Image, StatusBar, Animated, Easing } from 'react-native';


const App = () => {

    const [saldo, setSaldo] = useState(7320.93);
    const [num, setNum] = useState()
    

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
            />
            <Button
            title="Sacar"
            color={'#F21628'} />
            <Button
            style={styles.button}
            color={'#F21628'}
            title="Depositar"
            />


        </View>
    )

    
};

export default App