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
		import GridView from 'react-native-gridview';
		import CustomIcon from '../icon';
		const itemsPerRow = 2;
		const data = [{size:'6'},
			    {size:'8',isselected:"true",},
			    {size:'10'},
			    {size:'12'},
			    {size:'14'},];
		var {height, width} = Dimensions.get('window');
			export default class ProductColor extends React.Component{
			 static navigationOptions = {
		    headerVisible:false,
		    headerStyle:{
		      width:0,
		      height:0,
		    },
		  }
		  render(){
				     return (
				      <GridView 
					      data={data}
					      itemsPerRow={5}
					      renderItem={(item) => {	
					        return (
					        	<TouchableOpacity style={item.isselected?styles.backgroundHover:styles.backgroundNormal}>
					        		<Text style={item.isselected?styles.sizeTextSelected:styles.sizeTextNormal}>{item.size}</Text>
			  					</TouchableOpacity> 
			  			 );
					      }}
					  />
					          
		  		);
		  }
		}
		const styles = StyleSheet.create({
			backgroundNormal:
			{height:50,
				borderRadius:3, 
				width:50,
				backgroundColor:'#dadade',
				marginBottom:5,
				marginTop:20,
				justifyContent:'center',
				alignItems:'center'
			},
			backgroundHover:{
				height:50,
				borderRadius:3, 
				width:50,
				backgroundColor:'#67b0d6',
				marginBottom:5,
				marginTop:20,
				justifyContent:'center',
				alignItems:'center'
			},
			sizeTextNormal:{
				color:'#323c3f',
				fontWeight:'bold',
			},
			sizeTextSelected:{
				color:'#fff',
				fontWeight:'bold',
			}
		})