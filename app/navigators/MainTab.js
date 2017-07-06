import { TabNavigator } from 'react-navigation';
import AdviceScreen from '../component/advice/AdviceScreen';

const MainTab = TabNavigator({
  ALL: {
    screen: AdviceScreen,
  },
  MEN: {
    screen: AdviceScreen,
  },
  WOMEN: {
    screen: AdviceScreen,
  },
  KID:{
    screen: AdviceScreen,
  }
}, 
{
  initialRouteName: 'ALL',
  tabBarOptions: {
    activeTintColor: '#323c3f',
    style: {
      backgroundColor:'#67b0d6',
    },
    indicatorStyle:{
      backgroundColor:'#323c3f',
      height:3,
      marginLeft:10,
      width:70,
    },
    labelStyle: {
    fontSize: 12,
    fontFamily:'Myrid',
    fontWeight:'bold',
  },
    showIcon: false,
    showLabel: true,
  },
});

export default MainTab;
