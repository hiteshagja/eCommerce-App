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
		const data = [{color:"#f0c9ce", isChecked:"true"},
			    {color:"#af687a",isChecked:"true"},
			    {color:"#87a6b2",},];
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
					      itemsPerRow={3}
					      renderItem={(item) => {	
					        return (
					        	<TouchableOpacity style={{height:50,borderRadius:3, width:50,backgroundColor:item.color,marginBottom:5,marginTop:20,justifyContent:'center',alignItems:'center'}}>
					        		{ item.isChecked?<CustomIcon name="checked"/>:<View/>}
			  					</TouchableOpacity> 
			  			 );
					      }}
					  />
					          
		  		);
		  }
		}
		const styles = StyleSheet.create({
		})