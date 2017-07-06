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
		export default class FilterLabel extends React.Component{
			 static navigationOptions = {
		    headerVisible:false,
		    headerStyle:{
		      width:0,
		      height:0,
		    },
		  }
		  render(){
		  	return(

		  		<View>
		  		{
		  			// this.props.data.map((item) =>
		  				<View style={styles.labelContainer}>	
			  				<View style={styles.labelBackground}>
			  					<Text style={styles.filterText}>{this.props.data}</Text>
			  				</View>	
			  				<TouchableOpacity style={styles.closeContainer}>
			  					<CustomIcon name="close-cross-white"/>
			  				</TouchableOpacity>
		  				</View>
		  			// )
		  		}
		  		</View>
		  		);
		  }
		}

		const styles = StyleSheet.create({
			labelBackground:{
				backgroundColor:'#a6a6ad',
				padding:10,
				justifyContent:'center',
				alignItems:'center',
				borderRadius:3,
				position:'relative',

			},
			labelContainer:{
				flexDirection:'row',
				alignItems:'center',
				marginTop:20,
				position:'relative',
				justifyContent:'center',
				
			},
			filterText:{
				color:'#fff',
				fontSize:13,
			},
			closeContainer:{
				backgroundColor:'#000',
				padding:5,
				borderRadius:50,
				marginTop:-30,
				marginLeft:-10,		
			}
		})