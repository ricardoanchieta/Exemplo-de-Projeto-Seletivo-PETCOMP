import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Homepage from './src/pages/Homepage';
import Sobre from './src/pages/Sobre';
import Monitorias from './src/pages/Monitorias';
import SemanaCalouro from './src/pages/SemanaCalouro';
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