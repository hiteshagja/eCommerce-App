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
		import ProductRow from '../newProduct/ProductRow';
		import LabelSelect from 'react-native-label-select';
		import ProductColor from './ProductColor';
		import ProductSize from './ProductSize';
		var {height, width} = Dimensions.get('window');
		const itemsPerRow = 5;	  
		export default class ProductScreen extends React.Component{
			 static navigationOptions = {

		  }
		  render(){
		  	return(
		  		<ScrollView>
		  		<View style={styles.mainContainer}>
		  			
		  			<View style={styles.buttonContainer}>
			  			<TouchableOpacity style={styles.wishlistContainer}>
			  				<Text style={styles.wishlistText}>ADD TO WISHLIST</Text>
			  			</TouchableOpacity>
			  			<TouchableOpacity style={styles.CartContainer}>
			  				<Text style={styles.wishlistText}>ADD TO CART</Text>
			  			</TouchableOpacity>
		  			</View>
		  			<View style={styles.swiperContainer}>
		  				<Swiper style={styles.wrapper} showsButtons={false} height={300}  
		  					dot={<View style={{backgroundColor:'rgba(208,210,211,1)', width: 14, height: 6,borderRadius:2, marginLeft: -137, marginRight:140 , marginTop: 3, marginBottom: 30,}} />}
		  					activeDot={<View style={{backgroundColor:'rgba(103,176,214,1)', width: 14, height: 6,borderRadius:2, marginLeft: -137, marginRight: 140, marginTop: 3, marginBottom: 30,}} />}
		  				>
					        <View style={styles.slide}>
					        	<Image style={styles.productImage} source={require('../../../assests/images/SliderImage1.png')}/>  
					        </View>
					        <View style={styles.slide}>
					        	<Image style={styles.productImage} source={require('../../../assests/images/SliderImage1.png')}/>  
					        </View>
					        <View style={styles.slide}> 
					        	<Image style={styles.productImage} source={require('../../../assests/images/SliderImage1.png')}/>     
					        </View>
					      </Swiper>
					      <View style={styles.productDescriptionContainer}>
					      		<Text style={styles.productNameText}>Elegant Pink Dresses</Text>
					      		<TouchableOpacity style={styles.priceContainer}><Text style={styles.priceText}>$ 605,00</Text></TouchableOpacity>
					      </View>
		  			</View>
		  			<View style={styles.descriptionContainer}>
		  				<TouchableOpacity><CustomIcon name="add" /></TouchableOpacity>
		  				<Text style={styles.descriptionText}>Description</Text>
		  			</View>
		  			<View style={styles.filterContainer}>
		  					<View style={styles.colorContainer}>
				  				<View style={styles.colorHeading}>
				  					<CustomIcon name="drop"/>
				  					<Text style={styles.colourText}>Colour:</Text>
				  				</View>
				  				<Text style={styles.guideText}>Choose a colour for item</Text>
			  				</View>
			  				<View style={{paddingLeft:55,paddingRight:40,paddingBottom:20,borderBottomWidth:1, borderColor:'#dcdcdc'}}>
			  					<ProductColor />
			  				</View>
			  				<View style={styles.sizeContainer}>
				  				<View style={styles.colorHeading}>
				  					<CustomIcon name="hanger"/>
				  					<Text style={styles.colourText}>Size:</Text>
				  				</View>
				  				<Text style={styles.guideText}>Size available for this item</Text>
			  				</View>
			  				<View style={{}}>
			  					<ProductSize />
			  				</View>
		  			</View>
		  			<View style={styles.addToCartContainer}>
		  				<TouchableOpacity style={styles.cartBackground}>
		  					<Text style={styles.cartText}>Add to cart</Text>
		  				</TouchableOpacity>
		  			</View>
		  			<View style={styles.shareContainer}>
		  				<Text style={styles.shareOnText}>SHARE ON</Text>
		  				<View style={styles.borderView}>
		  				</View>
		  			</View>
		  			<View style={styles.socialContainer}>
			  			<View style={styles.socialSeprateContainer}>
			  				<TouchableOpacity style={styles.twitterContainer}>
			  					<CustomIcon name="twitter"/>
			  				</TouchableOpacity>
			  				<Image style={styles.countingContainer} source={require('../../../assests/images/socialCoutingImage.png')}>
			  					<Text style={styles.socialCountingText}>205</Text>
			  				</Image>  
			  			</View>
			  			<View style={styles.socialSeprateContainer}>
			  				<TouchableOpacity style={styles.facebookContainer}>
			  					<CustomIcon name="facebook"/>
			  				</TouchableOpacity>
			  				<Image style={styles.countingContainer} source={require('../../../assests/images/socialCoutingImage.png')}>
			  					<Text style={styles.socialCountingText}>205</Text>
			  				</Image>  
			  			</View>
			  			<View style={styles.socialSeprateContainer}>
			  				<TouchableOpacity style={styles.pinterestContainer}>
			  					<CustomIcon name="pinterest"/>
			  				</TouchableOpacity>
			  				<Image style={styles.countingContainer} source={require('../../../assests/images/socialCoutingImage.png')}>
			  					<Text style={styles.socialCountingText}>205</Text>
			  				</Image>  
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
				backgroundColor:'#38474f',
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
			buttonContainer:{
				flexDirection:'row',
				backgroundColor:'#38474f',
				justifyContent:'space-between',
				alignItems:'center',
				paddingRight:15,
				paddingLeft:15,
				paddingBottom:10,
			},
			wishlistContainer:{
				backgroundColor:'#2d3a40',
				justifyContent:'center',
				alignItems:'center',
				height:45,
				width:155,
				borderRadius:2,
			},
			wishlistText:{
				color:'#fff',
				fontSize:13,
				fontWeight:'bold',
			},
			CartContainer:{
				backgroundColor:'#f6846a',
				justifyContent:'center',
				alignItems:'center',
				height:45,
				width:155,
				borderRadius:2,
			},
			slide: {
		    flex: 1,
		    justifyContent: 'center',
		    alignItems: 'center',
		    backgroundColor: '#f8f8f8',
		    borderTopLeftRadius:5,
		    borderTopRightRadius:5,
		    width:width-30,
		  },
		  swiperContainer:{
		  	margin:15,
		  	
		  },
		  productImage:{
		  	resizeMode:'cover',
		  	width:145,
		  	height:290,
		  },
		  productDescriptionContainer:{
		  	justifyContent:'space-between',
		  	flexDirection:'row',
		  	padding:20,
		  	alignItems:'center',
		  	backgroundColor:'#ffffff',
		  	borderBottomLeftRadius:5,
		  	borderBottomRightRadius:5,
		  },
		  priceContainer:{
		  	backgroundColor:'#bfbfc4',
		  	paddingTop:15,
		  	paddingBottom:15,
		  	paddingLeft:20,
		  	paddingRight:20,
		  	borderRadius:3,
		  },
		  productNameText:{
		  	color:'#323c3f',
		  	fontWeight:'bold',
		  	fontSize:16,
		  },
		  priceText:{
		  	color:'#fff',
		  	fontSize:14,
		  },
		  descriptionContainer:{
		  	margin:15,
		  	backgroundColor:'#fff',
		  	padding:20,
		  	alignItems:'center',
		  	flexDirection:'row',
		  	borderRadius:5,
		  	elevation:2,
		  },
		  descriptionText:{
		  	marginLeft:30,
		  	color:'#323c3f',
		  	fontSize:16,
		  	fontWeight:'bold',
		  },
		  colorHeading:{
		  	flexDirection:'row',
		  },
		  colorContainer:{
		  	alignItems:'center',
		  	justifyContent:'center',
		  },
		  sizeContainer:{
		  	alignItems:'center',
		  	justifyContent:'center',
		  	marginTop:30,
		  },
		  colourText:{
		  	color:'#323c3f',
		  	fontSize:16,
		  	fontWeight:'bold',
		  	marginLeft:5,
		  },
		  filterContainer:{
		  	backgroundColor:'#fff',
		  	margin:15,
		  	padding:20,
		  	borderRadius:5,
		  	elevation:2,
		  },
		  guideText:{
		  	color:'#a6a6ad',
		  	marginTop:10,
		  	fontSize:15,
		  	fontWeight:'bold',
		  },
		  addToCartContainer:{
		  	justifyContent:'center',
		  	alignItems:'center',
		  	marginBottom:30,
		  	marginTop:20,
		  },
		  cartBackground:{
		  	backgroundColor:'#3a4144',
		  	paddingTop:15,
		  	paddingBottom:15,
		  	paddingLeft:60,
		  	paddingRight:60,
		  	borderRadius:3,
		  },
		  cartText:{
		  	color:'#fff',
		  	fontWeight:'bold',
		  	fontSize:16,
		  },
		  shareContainer:{
		  	justifyContent:'space-between',
		  	alignItems:'center',
		  	paddingRight:15,
		  	paddingLeft:15,
		  	flexDirection:'row',
		  	marginBottom:30,
		  },
		  borderView:{
		  	borderBottomWidth:1,
		  	borderColor:'#c9cbcc',
		  	height:5,
		  	width:230,
		  },
		  shareOnText:{
		  	color:'#323c3f',
		  	fontWeight:'bold',
		  	fontSize:16,
		  },
		  socialContainer:{
		  	flexDirection:'row',
		  	justifyContent:'space-between',
		  	paddingLeft:15,
		  	paddingRight:15,
		  	marginBottom:30,
		  	alignItems:'center',
		  },
		  twitterContainer:{
		  	backgroundColor:'#56c2ea',
		  	justifyContent:'center',
		  	alignItems:'center',
		  	padding:13,
		  	borderRadius:30,
		  },
		  facebookContainer:{
		  	backgroundColor:'#3b63b6',
		  	justifyContent:'center',
		  	alignItems:'center',
		  	padding:13,
		  	borderRadius:30,
		  },
		  pinterestContainer:{
		  	backgroundColor:'#e53e59',
		  	justifyContent:'center',
		  	alignItems:'center',
		  	padding:13,
		  	borderRadius:30,
		  },
		  cartNotification:{
		  	backgroundColor:'#fff',
		  	justifyContent:'center',
		  	alignItems:'center',
		  	height:10,
		  	width:20,
		  	borderRadius:10,
		  	position:'absolute',
		  	zIndex:999,
		  	top:17,
		  	left:325,
		  },
		  notificationText:{
		  	color:'#38474f',
		  	fontWeight:'bold',
		  	fontSize:10,
		  },
		  countingContainer:{
		  	width:50,
		  	height:25,
		  	alignItems:'center',
		  	justifyContent:'center',
		  },
		  socialSeprateContainer:{
		  	flexDirection:'row',
		  	alignItems:'center',
		  },
		  socialCountingText:{
		  	fontSize:12,
		  	paddingLeft:5,
		  	color:'#4d5659',
		  },
		})