import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Homepage from './src/pages/Homepage';
import Sobre from './src/pages/Sobre';
import Monitorias from './src/pages/Monitorias';
import SemanaCalouro from './src/pages/SemanaCalouro';
import outraPagina from './src/pages/outraPagina';

//Inicio do aplicativo

//Criação de uma navegação da forma "Stack"
const navigator = createStackNavigator({
  Homepage: {
    screen: Homepage,
    navigationOptions: ({navigation}) => ({
      //title: "test"
    })
  },
  Sobre: {
    screen: Sobre,
    navigationOptions: ({navigation}) => ({
      title: "Sobre"
    })
  },
  Monitorias: {
    screen: Monitorias,
    navigationOptions: ({navigation}) => ({
      title: "Monitorias"
    })
  },
  SemanaCalouro: {
    screen: SemanaCalouro,
    navigationOptions: ({navigation}) => ({
      title: "Semana do calouro"
    })
  },

  outraPagina:{
    screen: outraPagina,
    navigationOptions: ({navigation}) => ({
      title: "outra pagina"
    })
  },
},
{
  initialRouteName: 'Homepage',
  defaultNavigationOptions: {
    title: 'Homepage',
    headerStyle:{
      backgroundColor: "#00b3fe"
    }
  }
});

//Export do container para esse navigator
export default createAppContainer(navigator)