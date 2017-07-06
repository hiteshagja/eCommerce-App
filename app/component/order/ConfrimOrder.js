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
		import OrderRow from './OrderRow';
		import CustomIcon from '../icon';
		import RadioButton from 'radio-button-react-native';
		export default class ConfrimOrder extends React.Component{
			 static navigationOptions = {
		   
		  }
		   constructor() {
			    super();
			    const data=[
			    {image: '', productname:'Muffin Dress', size:'S', quantity:'1', price:'25,00'},
			    {image: '', productname:'Gergeus Cap', size:'7', quantity:'2', price:'112,00'},
			    {image: '', productname:'Black Trainers', size:'9.5', quantity:'1', price:'78,00'}, 
			    ];
			    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
			    this.state = {
			      dataSource: ds.cloneWithRows(data),
            		value: 0
			    };
			}   
			 handleOnPress(value){
			    this.setState({value:value})
			}
			render(){
		  	return(
		  		<ScrollView>
		  			<View style={styles.mainContainer}>
		  				<View style={styles.titleContainer}>
		  					<Text style={styles.titleText}>Your Order</Text>
		  				</View>
		  				<ListView style={styles.listContainer}
		            		dataSource={this.state.dataSource}
		            		renderRow={(rowData) => <OrderRow  {...rowData} />}
		            	/>
		            	<View style={styles.shippingTotalContainer}>
		            		<View style={styles.ShippingContainer}>
		            			<Text style={styles.shippingText}>SHIPPING AND HANDLING</Text>
		            			<TouchableOpacity style={styles.shippingButton}>
		            				<Text style={styles.buttonText}>FREE SHIPING</Text>
		            			</TouchableOpacity>
		            		</View>
		            		<View style={styles.totalContainer}>
		            			<Text style={styles.shippingText}>ORDER TOTAL</Text>
		            			<Text style={styles.grandTotal}>$ 327,00</Text>
		            		</View>
		            	</View>
		            	<View style={styles.payMethodContainer}>
		            		<View style={styles.titleContainer}>
		  						<Text style={styles.titleText}>SELECT A PAY METHOD</Text>
		  					</View>
		  					<View style={styles.paypalContainer}>
				               <View style={{marginLeft:10}}>
					               <RadioButton currentValue={this.state.value} value={0}>
						                <Text style={styles.paypalText}>PayPal</Text>
					                </RadioButton>
				                </View>
				                <View style={styles.paymentOptionsContainer}>
				                	<Image style={styles.paypalImage} source={require('../../../assests/images/paypal.png')}/>
				                	<View style={styles.paymentOptions}>
				                		<Image style={styles.paymentImage} source={require('../../../assests/images/visa.png')}/>
				                		<Image style={styles.paymentImage} source={require('../../../assests/images/mastercard.png')}/>
				                		<Image style={styles.paymentImage} source={require('../../../assests/images/maestro.png')}/>
				                		<Image style={styles.paymentImage} source={require('../../../assests/images/amex.png')}/>
				                	</View>
				                	<Text style={styles.paypalExplanation}>What is paypal?</Text>			                
				                </View>
				                <View style={styles.chequePaymentConatiner}>
									<View style={{marginLeft:10}}>
						               <RadioButton currentValue={this.state.value} value={0}>
							                <Text style={styles.paypalText}>Cheque Payment</Text>
						                </RadioButton>
						                <Text style={styles.chequeMethod}>Please send your cheque to Store Name, Store Street, Store Town, Store State/County, Store Postcode.</Text>
				                	</View>
				                	<View style={styles.bankTransferContainer}>
						               <RadioButton currentValue={this.state.value} value={0}>
							                <Text style={styles.paypalText}>Direct Bank Transfer</Text>
						                </RadioButton>
						                <Text style={styles.chequeMethod}>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account..</Text>
				                	</View>
								</View>
				        	</View>
		            	</View>
		            	<View style={styles.buttonContainers}>
		            		<TouchableOpacity style={styles.placeOrderButton}>
		            			<Text style={styles.buttonText}>PLACE ORDER</Text>
		            		</TouchableOpacity>
		            		<TouchableOpacity style={styles.cancelButton}>
		            			<Text style={styles.buttonText}>CANCEL</Text>
		            		</TouchableOpacity>
		            	</View>
		  			</View>
		  		</ScrollView>
		  		);
		  }
		}
		const styles = StyleSheet.create({
			mainContainer:{

			},
			titleContainer:{
				flexDirection:'row',
				backgroundColor:'#38474f',
				alignItems:'center',
				padding:20,
				justifyContent:'center',
				marginBottom:15,
			},
			titleText:{
				color:'#fff',
				fontFamily:'myrid',
				fontSize:15,
				fontWeight:'bold',	
			},
			shippingTotalContainer:{
				marginLeft:15,
				marginRight:15,
				padding:20,
				backgroundColor:'#f8f8f8',
				borderRadius:2,
				elevation:2,
			},
			ShippingContainer:{
				flexDirection:'row',
				justifyContent:'space-between',
				alignItems:'center',
				paddingBottom:15,
				borderBottomWidth:1,
				borderColor:'#dee0e0',
			},
			totalContainer:{
				flexDirection:'row',
				justifyContent:'space-between',
				alignItems:'center',
				paddingTop:15,
			},
			shippingButton:{
				justifyContent:'center',
				backgroundColor:'#84b262',
				paddingTop:7,
				paddingBottom:7,
				paddingLeft:15,
				paddingRight:15,
				borderRadius:2,
			},
			buttonText:{
				color:'#fff',
				fontSize:12,
				fontWeight:'bold',
			},
			shippingText:{
				fontSize:12,
				fontWeight:'bold',
				color:'#323c3f',
			},
			grandTotal:{
				color:'#f6846a',
				fontWeight:'bold',
				fontSize:16,
			},
			payMethodContainer:{
				margin:15,
				borderWidth:1,
				borderColor:'#d2d2d2',	
				borderRadius:2,
			},
			paypalText:{
				marginLeft:30,
				color:'#323c3f',
				fontWeight:'bold',
			},
			paymentOptionsContainer:{
				justifyContent:'center',
				alignItems:'center',
				marginTop:20,
			},
			paypalImage:{
				height:15,
				width:58,
			},
			paymentOptions:{
				justifyContent:'space-between',
				alignItems:'center',
				flexDirection:'row',
				marginTop:10,
			},
			paymentImage:{
				height:40,
				width:60,
				margin:10,
				borderRadius:2,
			},
			paypalExplanation:{
				color:'#7e7e85',
				fontWeight:'bold',
				marginTop:10,
			},
			chequePaymentConatiner:{
				marginTop:20,
				backgroundColor:'#f8f8f8',
				paddingTop:30,

			},
			chequeMethod:{
				marginLeft:55,
				fontSize:12,
				color:'#7e7e85',
				marginRight:10,
			},
			bankTransferContainer:{
				marginTop:30,
				marginLeft:10,
				paddingBottom:30,
			},
			buttonContainers:{
				justifyContent:'center',
				alignItems:'center',
			},
			placeOrderButton:{
				height:50,
				width:180,
				backgroundColor:'#84b262',
				borderRadius:2,	
				marginTop:20,
				marginBottom:20,
				alignItems:'center',
				justifyContent:'center',
				elevation:1,
			},
			cancelButton:{
				height:50,
				width:180,
				backgroundColor:'#e85653',
				borderRadius:2,	
				marginBottom:30,
				alignItems:'center',
				justifyContent:'center',
				elevation:1,
			}
		})