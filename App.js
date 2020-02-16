import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Homepage from './src/pages/Homepage';

const navigator = createStackNavigator({
  Homepage: {
    screen: Homepage,
    navigationOptions: ({navigation}) => ({
      //title: "test"
    })
  },
},
{
  initialRouteName: 'Homepage',
  defaultNavigationOptions: {
    title: 'Homepage'
  }
}
)

export default createAppContainer(navigator)