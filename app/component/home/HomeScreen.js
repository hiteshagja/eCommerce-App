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
		const itemsPerRow = 2;	  
		const data = [{image: '', productname:"Pink Shirt", price:"$ 249,000"},
			    {image: '',productname:"Checked Shirt",price:"$ 50,000" },
			    {image: '',productname:"Red polo Shirt",price:"$ 181,99"},
			    {image: '',productname:"Awesome Dress",price:"$ 249,000"},
			    {image: '', productname:"Pink Shirt",price:"$ 372,000"},
			    {image: '',productname:"Checked Shirt",price:"$ 249,000"},];

		export default class HomeScreen extends React.Component{
			 static navigationOptions = {
		   
		  }
		  render(){
		  	return(
		  		<ScrollView>
		  		<View style={styles.mainContainer}>
		  			<View style={styles.swiperContainer}>
		  				<Swiper style={styles.wrapper} showsButtons={false} showsPagination={false}>
					        <View style={styles.slide1}>
					          <Image style={styles.sliderUserImage} source={require('../../../assests/images/SliderImage.png')}>
					          		<View style={styles.textContainer}>
					          			<Text style={styles.collectionText}>New Collection</Text>
					          			<Text style={styles.outText}>Out now!</Text>
					          		</View>
					          		<TouchableOpacity style={styles.buttonContainer}>
					          			<Text style={styles.discoverText}>DISCOVER</Text>
					          		</TouchableOpacity>
					          </Image> 
					        </View>
					        <View style={styles.slide2}>
					          <Image style={styles.sliderUserImage} source={require('../../../assests/images/SliderImage.png')}>
					          		<View style={styles.textContainer}>
					          			<Text style={styles.collectionText}>New Collection</Text>
					          			<Text style={styles.outText}>Out now!</Text>
					          		</View>
					          		<TouchableOpacity style={styles.buttonContainer}>
					          			<Text style={styles.discoverText}>DISCOVER</Text>
					          		</TouchableOpacity>
					          </Image>
					        </View>
					        <View style={styles.slide3}>
					          <Image style={styles.sliderUserImage} source={require('../../../assests/images/SliderImage.png')}>
					          		<View style={styles.textContainer}>
					          			<Text style={styles.collectionText}>New Collection</Text>
					          			<Text style={styles.outText}>Out now!</Text>
					          		</View>
					          		<TouchableOpacity style={styles.buttonContainer}>
					          			<Text style={styles.discoverText}>DISCOVER</Text>
					          		</TouchableOpacity>
					          </Image>
					        </View>
					    </Swiper>
		  			</View>
		  			<View style={styles.SearchContainer}>
		  				<TouchableOpacity><CustomIcon style={styles.searchIcon} name="search-materia"/></TouchableOpacity>
		  				<TextInput style={styles.searchInput} placeholder="Search a item..." placeholderTextColor='#a6a6ad' underlineColorAndroid='transparent'/>
		  			</View>
		  			<View style={styles.productHeadingContainer}>
		  				<View style={styles.line}>
		  				</View>
		  				<Text style={styles.polpularText}>OUR POPULAR PRODUCTS</Text>
		  				<View style={styles.line}>
		  				</View>
		  			</View>
		  			<GridView style={{marginLeft:15}}
				      data={data}
				      itemsPerRow={2}
				      renderItem={(item) => {
				        return (
				          <TouchableOpacity style={styles.productContainer}>
				          	<Image style={styles.productImage} source={require('../../../assests/images/FirstImage.png')}/>
				            <Text style={styles.productText}>{`${item.productname}`}</Text>
				            <Text style={styles.productPrice}>{`${item.price}`}</Text>
				          </TouchableOpacity>
				        );
				      }}
				    />
				    <View style={styles.loadingIconContainer}>
				    	<TouchableOpacity><Image style={styles.loadingIcon} source={require('../../../assests/images/loadingIcon.png')}/></TouchableOpacity>
				    </View>
				    <View> 
				    <TouchableOpacity style={styles.loadingButtonContainer}>
				    	<Text style={styles.viewallText}>View all Items</Text>
				    </TouchableOpacity>
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
				padding:20,
				flexDirection:'row',
				backgroundColor:'#67b0d6',
				alignItems:'center',
			},
			bodyContainer:{
				flex:0.9,
			},
			titleText:{
				color:'#fff',
				fontFamily:'myrid',
				fontSize:17,
				marginLeft:35,
				fontWeight:'bold',
			},
			cartIcon:{
				marginLeft:100,
			},
			labelIcon:{
				marginLeft:40,
			},
		  text: {
		    color: '#fff',
		    fontSize: 30,
		    fontWeight: 'bold',
		  },
		  swiperContainer:{
		  	height:200,
		  },
		  sliderUserImage:{
		  	resizeMode:'cover',
		  	width:null,
		  	height:200, 	
		  },
		  collectionText:{
		  	color:'#323c3f',
		  	fontFamily:'Myrid',
		  	fontSize:17,
		  },
		  outText:{
		  	color:'#a6a6ad',
		  	fontSize:15,
		  },
		  textContainer:{
		  	marginLeft:200,
		  	marginTop:50,
		  },
		  buttonContainer:{
		  	backgroundColor:'#f6846a',
		  	justifyContent:'center',
		  	alignItems:'center',
		  	width:100,
		  	height:40,
		  	borderRadius:3,
		  	marginLeft:230,
		  	marginTop:35,
		  },
		  discoverText:{
		  	color:'#fff',
		  	fontSize:13,
		  },
		  SearchContainer:{
		  	flexDirection:'row',
		  	margin:20,
		  	backgroundColor:'#fff',
		  	elevation:3,
		  },
		  searchInput:{
		  	width:250,
		  	marginLeft:40,
		  	fontSize:20,
		  },
		  searchIcon:{
		  	marginTop:15,
		  	marginLeft:20,
		  },
		  productHeadingContainer:{
		  	justifyContent:'center',
		  	alignItems:'center',
		  },
		  line:{
		  	backgroundColor:'#bec0c1',
		  	height:3,
		  	width:80,
		  	marginTop:10,
		  },
		  polpularText:{
		  	color:'#323c3f',
		  	fontSize:17,
		  	marginTop:10,
		  	fontFamily:'Myrid Pro Regular',
		  },
		  productImage:{
		  	resizeMode:'cover',
		  	height:180,
		  	width:80,
		  },
		  productContainer:{
		  	alignItems:'center',
		  	justifyContent:'space-between',
		  	marginTop:15,
		  	backgroundColor:"#fff",
		  	width:155,
		  	borderRadius:5,
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
		  loadingIconContainer:{
		  	justifyContent:'center',
		  	alignItems:'center',
		  	marginTop:30,
		  },
		  loadingIcon:{
		  	height:45,
		  	width:45,
		  },
		  loadingButtonContainer:{
		  	justifyContent:'center',
		  	alignItems:'center',
		  	backgroundColor:'#3a4144',
		  	height:45,
		  	width:200,
		  	marginLeft:80,
		  	marginTop:20,
		  	marginBottom:20,
		  	borderRadius:5,
		  },
		  viewallText:{
		  	color:'#fff',
		  	fontSize:18,
		  }
		})