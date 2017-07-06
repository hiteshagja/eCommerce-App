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
		import GridView from 'react-native-gridview';
		var {height, width} = Dimensions.get('window');
		const itemsPerRow = 5;	  
		export default class CustomTextbox extends React.Component{
			 static navigationOptions = {
		    headerVisible:false,
		    headerStyle:{
		      width:0,
		      height:0,
		    },
		  }
		  render(){
		  	return(		
					<View style={[styles.textboxBackground,this.props.style]}>
						<TextInput style={[styles.textInput ]} underlineColorAndroid="transparent" placeholder={this.props.placeholderText} placeholderTextColor="#a6a6ad"/>
					</View>
		  		);
		  }
		}
		const styles = StyleSheet.create({
			textboxBackground:{
				backgroundColor:'#f8f8f8',
				borderRadius:2,
				elevation:2,
			},
			textInput:{
				width:240,
				height:50,
				paddingLeft:30,
			},
			
		})