import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack';

//variável que cria a primeira navegação, dentro dela começo as minhas rotas
const AppStack = createStackNavigator();

//importando as páginas que criei
import Incidents from './pages/Incidents';
import Detail from './pages/Detail';

export default function Routes() {
    return (
        //essencial que ele venha por volta das rotas
        <NavigationContainer>
            
            {/* Componente que vem por volta das rotas / screenOption para parar de aparecer o header*/}
            <AppStack.Navigator screenOptions={{ headerShown: false }}>

            {/* rotas com propriedade componente, que é a minha página */}
            <AppStack.Screen name="Incidents" component={Incidents} />
            <AppStack.Screen name="Detail" component={Detail} />

            </AppStack.Navigator>

        </NavigationContainer>

    );
}