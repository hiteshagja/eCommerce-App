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
		export default class OrderRow extends React.Component{
			 static navigationOptions = {

		   
		  }
		  render(){
		  	return(
		  		<View style={styles.orderRowContainer}>
		  		    <View style={styles.iconContainer}>
		  				<TouchableOpacity><CustomIcon name="close-cross-gray"/></TouchableOpacity>
		  			</View>
		  			<View style={styles.contentContainer}>
		  				<View style={styles.orderImageContainer}>
		  					<Image style={styles.orderImage} source={require('../../../assests/images/orderProduct.png')}/>
		  				</View>
		  				<View style={styles.productDetailContainer}>
		  					<View style={styles.ProductNameContainer}>
		  						<Text style={styles.ProductText}>{this.props.productname}</Text>
		  						<View style={styles.sizeQuantityContainer}>
		  							<View style={styles.sizeQuantityBg}>
		  								<Text style={styles.sizeQuantityText}>SIZE:{this.props.size}</Text>
		  							</View>
		  							<View style={styles.sizeQuantityBg}>
		  								<Text style={styles.sizeQuantityText}>x{this.props.quantity}</Text>
		  							</View>
		  						</View>
		  					</View>			
		  				</View>
		  				<View style={styles.priceContainer}>
		  					<Text style={styles.priceText}>$ {this.props.price}</Text>
		  				</View>
		  			</View>
		  		</View>
		  	);
		  }

		}

		const styles = StyleSheet.create({
			orderRowContainer:{
				backgroundColor:'#f8f8f8',
				marginLeft:15,
				marginRight:15,
				borderRadius:2,
				elevation:2,
				marginBottom:15,
			},
			iconContainer:{
				justifyContent:'flex-end',
				alignItems:'flex-end',
				padding:15,
			},
			contentContainer:{
				flexDirection:'row',
				padding:20,
				marginTop:-40,
				justifyContent:'space-between',
				alignItems:'center',	
			},
			orderImageContainer:{
				backgroundColor:'#e9e9e9',
				justifyContent:'center',
				alignItems:'center',
				paddingLeft:7,
				paddingRight:7,
				paddingTop:17,
				paddingBottom:17,
				borderRadius:70,
				elevation:3,
			},
			productDetailContainer:{
				
			},
			orderImage:{
				width:40,
				height:20,
			},
			sizeQuantityContainer:{
				flexDirection:'row',
			},
			sizeQuantityBg:{
				backgroundColor:'#e2e4e4',
				marginRight:10,
				marginTop:10,
				height:20,
				justifyContent:'center',
				alignItems:'center',
				width:45,
				borderRadius:2,
				elevation:2,
			},
			priceContainer:{
				alignItems:'center',
				justifyContent:'center',
			},
			ProductText:{
				color:'#323c3f',
				fontWeight:'bold',
				fontSize:15,
			},
			sizeQuantityText:{
				fontSize:10,
				color:'#323c3f',
				fontWeight:'bold',
			},
			priceText:{
				color:'#a6a6ad',
				fontWeight:'bold',
				fontSize:15,
			}
		})