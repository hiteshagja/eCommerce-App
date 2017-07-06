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
		import CustomTextbox from './CustomTextbox';
		var {height, width} = Dimensions.get('window');
		const itemsPerRow = 5;	  
		export default class BillingDetail extends React.Component{
			 static navigationOptions = {
		    headerVisible:false,
		    headerStyle:{
		      width:0,
		      height:0,
		    },
		  }
		  render(){
		  	return(
		  		<ScrollView>
		  		<View style={styles.mainContainer}>
		  			<View style={styles.titleContainer}>
		  				<Text style={styles.titleText}>Billing Details</Text>
		  			</View>	
		  			<View style={styles.couponContainer}>
		  				<Image style={styles.billingBgImage} source={require('../../../assests/images/billingBgImage.png')}>
		  					<TouchableOpacity style={styles.closeIcon}><CustomIcon name="materia-cancel"/></TouchableOpacity>
		  					<View style={styles.coupontextContainer}>
		  						<Text style={styles.couponText}>Have a Coupon?</Text>
		  					</View>
		  					<View style={styles.codeContainer}>
		  						<View style={styles.couponCodeBackground}>
		  							<TextInput style={styles.codeInput} underlineColorAndroid="transparent" placeholder="Coupon Code here..." placeholderTextColor="#fff"/>
		  						</View>
		  						<TouchableOpacity style={styles.codeButtonContainer}>
		  							<Text style={styles.codeButtonText}>APPLY</Text>
		  						</TouchableOpacity>
		  					</View>
		  				</Image>   
		  			</View>
		  			<View style={styles.formContainer}>
			  			<View style={styles.countryContainer}>
			  				<CustomTextbox placeholderText="Select a Country" style={{width:280}}/>
			  				<TouchableOpacity style={styles.dropdownButton}>
			  					<CustomIcon name="down"/>
			  				</TouchableOpacity>
			  			</View>
			  			<View style={styles.textboxContainer}>
			  				<CustomTextbox placeholderText="Full Name"/>
			  			</View>
			  			<View style={styles.textboxContainer}>
			  				<View style={[styles.textboxBackground]}>
								<TextInput style={[styles.textInput ]} underlineColorAndroid="transparent" placeholder="1234 Kingdom Avenue" placeholderTextColor="#323c3f"/>
								<CustomIcon name="ticked" />
							</View>
			  			</View>
			  			<View style={styles.textboxContainer}>
			  				<CustomTextbox placeholderText="Address line two"/>
			  			</View>
			  			<View style={styles.textboxContainer}>
			  				<CustomTextbox placeholderText="Town / City"/>			  			
			  			</View>
			  			<View style={[styles.textboxContainer,styles.zipcodeContainer]}>
			  				<CustomTextbox placeholderText="Postcode / Zip" style={{width:160}}/>
			  				<View style={[styles.textboxBackground]}>
								<TextInput style={[styles.phoneInput ]} underlineColorAndroid="transparent" placeholder="Phone" placeholderTextColor="#323c3f"/>
								<CustomIcon name="close-cross" />
							</View>		  				
			  			</View>
			  			<View style={styles.textboxContainer}>
			  				<CustomTextbox placeholderText="Email address"/>			  			
			  			</View>
			  			<View style={styles.orderButtonContainer}>
			  				<TouchableOpacity style={styles.orderButton}>
			  					<Text style={styles.buttonText}>NEXT - YOUR ORDER</Text>
			  				</TouchableOpacity>
			  			</View>
		  			</View>
		  		</View>
		  		</ScrollView>
		  		);
		  }
		}
		const styles = StyleSheet.create({
			mainContainer:{
				flex:1,
				backgroundColor:'#e8e8e8',
			},
			headerContainer:{
				flexDirection:'row',
				backgroundColor:'#f6846a',
				paddingTop:20,
				paddingLeft:20,
				paddingRight:30,
				paddingBottom:20,
				justifyContent:'space-between',
			},
			headerLeft:{
				flexDirection:'row',
				justifyContent:'space-between',
				alignItems:'center',
			},
			productName:{
				color:'#fff',
				fontFamily:'myrid',
				fontSize:15,
				marginLeft:30,
				fontWeight:'bold',
			},
			titleContainer:{
				flexDirection:'row',
				backgroundColor:'#38474f',
				alignItems:'center',
				padding:20,
				justifyContent:'center',
			},
			couponContainer:{
				backgroundColor:'#38474f',
				justifyContent:'center',
				alignItems:'center',
			},
			billingBgImage:{
				height:200,
				resizeMode:'cover',
				width:width,
				padding:15,
			},
			titleText:{
				color:'#fff',
				fontFamily:'myrid',
				fontSize:15,
				fontWeight:'bold',	
			},
			closeIcon:{
				alignItems:'flex-end',
			},
			coupontextContainer:{
				justifyContent:'center',
				alignItems:'center',
				marginTop:10,
			},
			couponText:{
				color:'#fff',
				fontSize:22,
				fontWeight:'bold',
			},
			codeContainer:{
				flexDirection:'row',
				justifyContent:'space-between',
				alignItems:'center',
				marginTop:40,
			},
			couponCodeBackground:{
				backgroundColor:'rgba(255,255,255,0.3)',
				borderRadius:2,
			},
			codeInput:{
				width:240,
				height:40,
				paddingLeft:30,
			},
			codeButtonContainer:{
				backgroundColor:'#fff',
				justifyContent:'center',
				alignItems:'center',
				paddingTop:10,
				paddingBottom:10,
				paddingLeft:20,
				paddingRight:20,
				borderRadius:2,
			},
			codeButtonText:{
				color:'#323c3f',
				fontWeight:'bold',
			},
			countryContainer:{
				marginTop:15,
				flexDirection:'row',
			},
			formContainer:{
				paddingLeft:15,
				paddingRight:15,
			},
			dropdownButton:{
				backgroundColor:'#38474f',
				width:50,
				height:50,
				alignItems:'center',
				justifyContent:'center',
				borderRadius:1,
				elevation:2,
			},
			textboxContainer:{
				marginTop:15,
			},
			textboxBackground:{
				backgroundColor:'#f8f8f8',
				borderRadius:2,
				flexDirection:'row',
				justifyContent:'space-between',
				alignItems:'center',
				paddingRight:15,
				elevation:2,
			},
			textInput:{
				width:240,
				height:50,
				paddingLeft:30,
			},
			phoneInput:{
				width:120,
				height:50,
				paddingLeft:30,
			},
			zipcodeContainer:{
				flexDirection:'row',
				justifyContent:'space-between',	
			},
			orderButtonContainer:{
				margin:15,
				justifyContent:'center',
				alignItems:'center',
			},
			orderButton:{
				backgroundColor:'#84b262',
				elevation:2,
				borderRadius:2,
				justifyContent:'center',
				alignItems:'center',
				height:50,
				width:200,
			},
			buttonText:{
				color:'#fff',
				fontSize:14,
				fontWeight:'bold',
			}
		})