import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons'; //importando pacote de ícones direto com o expo
import { useNavigation } from '@react-navigation/native'; //mais ou menos como o useHistory no react
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';

import api from '../../services/api';

import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function Incidents() {
    const [incidents, setIncidents] = useState([]); 
    const [total, setTotal] = useState(0); //iniciar um novo estado para mostrar quantos incidents tem
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false); //
    
    const navigation = useNavigation();

    //faz o botão funcionar e manda para a página de Detail
    function navigateToDetail(incident) {
        navigation.navigate('Detail', { incident } );
    }


    //chamada da API
async function loadIncidents(){

    if(loading) {
        return;
    } //evita que enquanto uma requisição estiver sendo feita, outra aconteça  


    if (total > 0 && incidents.length === total) {
        return;
    }

    setLoading(true);

    const response = await api.get('incidents', {
        params: { page }
    } );

    setIncidents([...incidents, ...response.data]); //dados da API
    setTotal(response.headers['x-total-incidents']); //número total de incidents
    setPage(page + 1);
    setLoading(false);
}


useEffect(() => {
    loadIncidents();
}, []);


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>{total} casos</Text>.
                </Text>
            </View>

            <Text style={styles.title}>Bem-vindo!</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>

            {/* Scroll */}
            <FlatList
                data={incidents} //número de vezes que o incident vai se repetir
                style={styles.incidentList}
                keyExtractor={incident => String(incident.id)} //chave estrangeira para repetições
                // showsVerticalScrollIndicator={false} //desabilitar o ícone do scroll
                onEndReached={loadIncidents}
                onEndReachedThreshold={0.2}
                renderItem={({ item: incident }) => (
                    <View style={styles.incident}>
                        <Text style={styles.incidentProperty}>ONG:</Text>
                        <Text style={styles.incidentValue}>{incident.name}</Text>

                        <Text style={styles.incidentProperty}>CASO:</Text>
                        <Text style={styles.incidentValue}>{incident.title}</Text>

                        <Text style={styles.incidentProperty}>VALOR:</Text>
                        <Text style={styles.incidentValue}>
                            {Intl.NumberFormat('pt-BR', { 
                                style: 'currency', 
                                currency: 'BRL' 
                                }).format(incident.value)}
                        </Text>

                        <TouchableOpacity
                            style={styles.detailsButton}
                            onPress={() => navigateToDetail(incident)}>

                            <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                            <Feather name="arrow-right" size={16} color="#E02041" />
                        </TouchableOpacity>
                    </View>
                )}
            />



        </View>
    );
}