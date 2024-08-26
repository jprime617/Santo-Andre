import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput, Image, StatusBar, Modal } from 'react-native';

const App = () => {

    const [saldo, setSaldo] = useState(100);
    const [num, setNum] = useState("");
    const [modalvisivel, setModalvisivel] = useState(false);
    const [valorTemp, setValorTemp] = useState(0); // Estado para armazenar o valor temporário

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
                setValorTemp(-total); // Armazena o valor temporário (negativo porque é um saque)
                break;

            case 'depositar':
                const taxaDeposito = numero * 0.01;
                total = numero + taxaDeposito;
                setValorTemp(total); // Armazena o valor temporário (positivo porque é um depósito)
                break;

            default:
                return;
        }

        setNum("");
        setModalvisivel(true); // Exibe o modal para confirmação
    }

    const confirmarOperacao = () => {
        setSaldo(saldo + valorTemp); // Atualiza o saldo com o valor temporário
        setModalvisivel(false); // Fecha o modal após confirmar
        setValorTemp(0); // Reseta o valor temporário
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
                transparent={true}
            >
                <View style={styles.container}>
                    <Text style={styles.fontSal}>
                        Confirma a operação de {valorTemp < 0 ? "Saque" : "Depósito"} de R$ {Math.abs(valorTemp).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}?
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
