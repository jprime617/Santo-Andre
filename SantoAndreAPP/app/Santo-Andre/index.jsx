import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput, Image, StatusBar, Modal } from 'react-native';

const App = () => {

    const [saldo, setSaldo] = useState(7320.92);
    const [num, setNum] = useState("");
    const [modalvisivel, setModalvisivel] = useState(false);
    const [valorTemp, setValorTemp] = useState(0); 
    //tem um milhão de formas de morrer

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

    const conta = function (x) {
        let numero = parseFloat(num);
        let total = 0;

        if (numero < 1 || num === "") {
            return console.log("CALMA LA PAIZAO");
        }

        switch (x) {
            case 'sacar':
                if (numero > saldo) {
                    return console.log("CALMA LA PAIZAO");
                }
                const oi1 = saldo - numero;
                const taxaSaque = oi1 * 0.025;
                total = numero + taxaSaque;
                setValorTemp(-total); 
                break;

            case 'depositar':
                const taxaDeposito = numero * 0.01;
                total = numero + taxaDeposito;
                setValorTemp(total); 
                break;

            default:
                return;
        }
        console.log(total)
        setNum("");
        setModalvisivel(true);
    }

    const confirmarOperacao = () => {
        setSaldo(saldo + valorTemp); 
        setModalvisivel(false); 
        setValorTemp(0); 
    };

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'#000000'} />
            <Image
                style={styles.image}
                source={{ uri: 'https://www.itapevarec.com.br/Nembus/Images/logo-santander-transparent.png' }}
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
                onPress={() => conta('sacar')}
            />
            <Button
                style={styles.button}
                color={'#F21628'}
                title="Depositar"
                onPress={() => conta('depositar')}
            />

            <Modal
                animationType="fade"
                visible={modalvisivel}
            >
                <View style={styles.container}>
                    <Text style={styles.fontSal}>
                        Confirma a operação de Saque/Deposito de R$ {Math.abs(valorTemp).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}?
                    </Text>
                    <Text style={styles.fontSal}>
                        Seu Saldo Será: R$ {(saldo + valorTemp).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </Text>
                    <Button
                        title="Confirmar"
                        color={'#28A745'}
                        onPress={confirmarOperacao}
                    />
                    <Button
                        title="Cancelar"
                        color={'#DC3545'}
                        onPress={() => setModalvisivel(false)}
                    />
                </View>
            </Modal>
        </View>
    )
};

export default App;
