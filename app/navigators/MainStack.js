import React from 'react';
import HomeScreen from '../component/home/HomeScreen';
import ProductSreen from  '../component/product/ProductScreen';
import FilterLabels from '../component/filter/FilterLabels';
import ProductDescription from '../component/product/ProductDescription';
import BillingDetail from '../component/billing/BillingDetail';
import LeftHeaderComponent from '../component/header/LeftHeaderComponent';
import RightHeaderComponent from '../component/header/RightHeaderComponent';
import MainTab from './MainTab';
import ConfrimOrder from '../component/order/ConfrimOrder';

import {
  StackNavigator,	
} from 'react-navigation';

const navigationOptions = {
  headerStyle: {
    backgroundColor: '#f6846a',
    height: 60,
    justifyContent: 'center',
    elevation: 0,
    paddingRight:20,
  },
  headerTitleStyle: {
    color: '#FFFFFF',
    justifyContent: 'flex-end',
    fontSize:16,
    marginLeft:30,
  },
  headerTintColor: '#FFFFFF',
};

const MainStack = StackNavigator({
	Home: { 
		screen: HomeScreen,
		navigationOptions: navigation => ({
      headerStyle: {
        ...navigationOptions.headerStyle,
        backgroundColor:'#67b0d6',
      },
      headerTitle: 'eCommerce',
      headerLeft: (<LeftHeaderComponent name="menu-Materia" {...navigation} />),
      headerRight: (<RightHeaderComponent icon1="cart-Materia" icon2="label" notification="true"  {...navigation} />),
    }),
	},
	Product: {
	 screen: ProductSreen,
	 navigationOptions: navigation => ({
      headerStyle: {
        ...navigationOptions.headerStyle,
        backgroundColor:'#67b0d6',
      },
      headerTitle: 'Woman, Dresses',
      headerLeft: (<LeftHeaderComponent name="menu-Materia" {...navigation} />),
      headerRight: (<RightHeaderComponent icon1="cart-Materia" image="true" {...navigation} />),
    }),
	},
	Filter:{ screen: FilterLabels},
	Description:{ 
		screen: ProductDescription,
		navigationOptions: navigation => ({
      headerStyle: {
        ...navigationOptions.headerStyle,
        backgroundColor:'#38474f',
      },
      headerTitle: 'Woman, Dresses',
      headerLeft: (<LeftHeaderComponent name="back" {...navigation} />),
      headerRight: (<RightHeaderComponent icon1="cart-Materia-Product" notification="true" {...navigation} />),
    }),
	},

	Billing:{ 
		screen: BillingDetail,
		navigationOptions: navigation => ({
      headerStyle: {
        ...navigationOptions.headerStyle,
        backgroundColor:'#f6846a',
      },
      headerTitle: 'Checkout',
      headerLeft: (<LeftHeaderComponent name="back" {...navigation} />),
    }),

	},
	MainTab:{
		screen: MainTab,
    navigationOptions: navigation => ({
      headerStyle: {
        ...navigationOptions.headerStyle,
        backgroundColor:'#67b0d6',
      },
      headerTitle: 'Checkout',
      headerLeft: (<LeftHeaderComponent name="back" {...navigation} />),
      headerRight: (<RightHeaderComponent icon1="cart-Materia" icon2="label" notification="true" {...navigation} />),
    }),
	},

  Order:{ 
    screen: ConfrimOrder,
    navigationOptions: navigation => ({
      headerStyle: {
        ...navigationOptions.headerStyle,
        backgroundColor:'#f6846a',
      },
      headerTitle: 'Checkout',
      headerLeft: (<LeftHeaderComponent name="back" {...navigation} />),
      
    }),

  }
	
},
	{
	initialRouteName: 'Home',
	navigationOptions,
});

export default MainStack;