import React, { PropTypes } from 'react';
		import {
		  AsyncStorage,
		  Dimensions,
		  Image,
		  Button,
		  Text,
		  View,
		  TouchableOpacity,
		  Linking,
		  ListView,
		  ScrollView,
		  StyleSheet,
		  TextInput,
		  KeyboardAvoidingView,
		  StackNavigator,
		} from 'react-native';
		import CustomIcon from '../icon';
		import Swiper from 'react-native-swiper';
		import FilterLabels from '../filter/FilterLabels';
		import GridView from 'react-native-gridview';
		import LabelSelect from 'react-native-label-select';
		var {height, width} = Dimensions.get('window');
		const itemsPerRow = 2;
		const data = [{image: '', productname:"Green Blouse", price:"$ 348,000", newItem:"true"},
			    {image: '',productname:"Checked Shirt",price:"$ 50,000", newItem:"true" },
			    {image: '',productname:"Red polo Shirt",price:"$ 181,99"},
			    {image: '',productname:"Awesome Dress",price:"$ 249,000"},];
			export default class ProductRow extends React.Component{
			 static navigationOptions = {
		    headerVisible:false,
		    headerStyle:{
		      width:0,
		      height:0,
		    },
		  }
		  render(){
		  	return(
		  		<GridView
				      data={data}
				      itemsPerRow={itemsPerRow}
				      renderItem={(item) => {
				        return (
				       <View>
					          <TouchableOpacity style={styles.productContainer}>
					          	<Image style={styles.productImage} source={require('../../../assests/images/firstProduct.png')}/>
					            <Text style={styles.productText}>{`${item.productname}`}</Text>
					            <Text style={styles.productPrice}>{`${item.price}`}</Text>
					          </TouchableOpacity>
				        		{
				        		item.newItem ? (<View style={styles.newContainer}>
					          		<Text style={styles.newText}>New</Text>
					          </View>) : <View />
				        	}
				        </View>
				        );
				      }}
				    />
		  		);
		  }
		}

		const styles = StyleSheet.create({
			productContainer:{
		  	alignItems:'center',
		  	justifyContent:'space-between',
		  	marginTop:15,
		  	backgroundColor:"#fff",
		  	width:155,
		  	borderRadius:5,
		  	marginLeft:12,
		  	marginRight:40,
		  	position:'relative',
		  },
		  productText:{
		  	color:'#000',
		  	fontWeight:'bold',
		  	marginTop:5,
		  	fontSize:15,
		  },
		  productPrice:{
		  	marginTop:5,
		  	paddingBottom:20,
		  	color:'#bbbcc9',
		  	fontSize:12,
		  },
		  productImage:{
		  	resizeMode:'cover',
		  	height:180,
		  	width:80,
		  },
		  newContainer:{
		  	backgroundColor:'#f6846a',
		  	justifyContent:'center',
		  	alignItems:'center',
		  	padding:10,
		  	height:35,
		  	width:70,
		  	borderRadius:3,
		  	position:'absolute',
		  	zIndex:999,
		  	top:40,
		  	right:105,
		  	elevation:1,
		  },
		  newText:{
		  	color:'#fff',
		  }
		})