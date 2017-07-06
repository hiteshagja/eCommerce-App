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
		export default class BillingDetail extends React.Component{
		  render(){
		  	return(
		  		<ScrollView>
		  		<View style={styles.mainContainer}>
			  		<View style={styles.firstBlockContainer}>
			  			<View style={styles.textContainer}>
			  				<Text style={styles.DiscoverText}>Discover our sales</Text>
			  				<Text style={styles.shoppingText}>Start shopping!</Text>
			  			</View>
			  			<View>
			  				<Image style={styles.userImage} source={require('../../../assests/images/AdviceImage1.png')}/>
			  			</View>
			  		</View>
			  		<View style={styles.secondBlockContainer}>
			  			<View style={styles.ImageContainer}>
			  				<Image style={styles.userImage2} source={require('../../../assests/images/AdviceImage2.png')}/>
			  			</View>
			  			<View style={styles.ultimateTextCollection}>
			  				<Text style={styles.ultimateText}>U L T I M A T E  C O L L E C T I O N</Text>
			  				<Text style={styles.priceText}>FROM $142</Text>
			  			</View>
			  		</View>
			  		<View style={styles.SearchContainer}>
		  				<TouchableOpacity><CustomIcon style={styles.searchIcon} name="search-materia"/></TouchableOpacity>
		  				<TextInput style={styles.searchInput} placeholder="Search a item..." placeholderTextColor='#a6a6ad' underlineColorAndroid='transparent'/>
		  			</View>
		  			<View style={styles.collectionContainer}>
		  				<TouchableOpacity style={styles.summerCollection}>
		  					<Image style={styles.collectionImage} source={require('../../../assests/images/summerCollectionImage.png')}/>
		  					<View style={styles.summerTextCollection}>
		  						<Text style={styles.collectionText}>SUMMER 2015</Text>
		  					</View>	
		  				</TouchableOpacity>
		  				<TouchableOpacity style={styles.winterCollection}>
		  					<Image style={styles.collectionImage} source={require('../../../assests/images/winterCollectionImage.png')}/>
		  					<View style={styles.summerTextCollection}>
		  						<Text style={styles.collectionText}>WINTER 14/15</Text>
		  					</View>	
		  				</TouchableOpacity>
		  			</View>
		  			<TouchableOpacity style={styles.premiumCollectionContainer}>
		  				<Image style={styles.premiumcollectionImage} source={require('../../../assests/images/premiumImage.png')}/>
		  				<View style={styles.premiumTextCollection}>
		  						<Text style={styles.collectionText}>PREMIUM</Text>
		  				</View>
		  			</TouchableOpacity>
		  			 <View style={styles.loadingIconContainer}>
				    	<TouchableOpacity><Image style={styles.loadingIcon} source={require('../../../assests/images/loadingIcon.png')}/></TouchableOpacity>
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
			ImageContainer:{
				alignItems:'center',
			},
			userImage:{
				resizeMode:'cover',
				width:130,
				height:170,
				
			},
			firstBlockContainer:{
				flexDirection:'row',
				justifyContent:'space-between',
				backgroundColor:'#f5f5f5',
				paddingLeft:15,
				paddingRight:15,
			},
			DiscoverText:{
				color:'#13164c',
				fontWeight:'bold',
				fontSize:18,
			},
			shoppingText:{
				color:'#a4a5b7',
				fontSize:15,
			},
			textContainer:{
				marginTop:30,
				marginLeft:20,
			},
			secondBlockContainer:{
				backgroundColor:'#ed897f',
				justifyContent:'center',
				alignItems:'center',
			},
			userImage2:{
				resizeMode:'cover',
				width:150,
				height:170,
			},
			ultimateTextCollection:{
				position:'absolute',
				top:90,
				zIndex:999,
				justifyContent:'center',
				alignItems:'center',
			},
			ultimateText:{
				color:'#fff',
				fontSize:18,
				fontWeight:'bold',
			},
			priceText:{
				color:'#fff',
				fontWeight:'bold',
				fontSize:15,
			},
			SearchContainer:{
		  	flexDirection:'row',
		  	margin:20,
		  	backgroundColor:'#fff',
		  	elevation:3,
		  },
		   searchInput:{
		  	width:250,
		  	marginLeft:30,
		  	fontSize:20,
		  },
		  searchIcon:{
		  	marginTop:15,
		  	marginLeft:30,
		  },
		  collectionContainer:{
		  	flexDirection:'row',
		  	justifyContent:'space-between',
		  	alignItems:'center',
		  	paddingRight:15,
		  	paddingLeft:15,
		  	marginBottom:30,
		  },
		  collectionImage:{
		  	height:150,
		  	width:155,
		  	resizeMode:'cover',
		  },
		  summerTextCollection:{
		  	justifyContent:'center',
		  	alignItems:'center',
		  	width:155,
		  	backgroundColor:'#fff',
		  	height:50,
		  	borderRadius:2,
		  },
		  premiumTextCollection:{
		  	justifyContent:'center',
		  	alignItems:'center',
		  	width:350,
		  	backgroundColor:'#fff',
		  	height:50,
		  	borderRadius:2,
		  },
		  collectionText:{
		  	color:'#323c3f',
		  	fontWeight:'bold',
		  },
		  winterCollection:{
		  	borderRadius:2,
		  	elevation:2,
		  },
		  summerCollection:{
		  	borderRadius:2,
		  	elevation:2,
		  },
		  premiumCollectionContainer:{
		  	alignItems:'center',
		  	justifyContent:'center',
		  	backgroundColor:'#fff',
		  	elevation:2,
		  	borderRadius:2,
		  	marginLeft:15,
		  	marginRight:15,
		  },
		  premiumcollectionImage:{
		  	width:200,
		  	height:130,
		  },
		  loadingIconContainer:{
		  	justifyContent:'center',
		  	alignItems:'center',
		  	marginTop:30,
		  	marginBottom:30,
		  },
		  loadingIcon:{
		  	height:45,
		  	width:45,
		  },

		})