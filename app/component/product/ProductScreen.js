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
		var {height, width} = Dimensions.get('window');
		const itemsPerRow = 2;	
		const itemRow=3;  
		const filter =['TOP RATED', 'SIZE: M', 'SPRING',];
		export default class ProductScreen extends React.Component{
			 static navigationOptions = {
		  }
		  render(){
		  	return(
		  		<ScrollView>
		  		<View style={styles.mainContainer}>
		  			<View style={styles.subProductContainer}>
		  				<Text style={styles.casualText}>Casual Dresses</Text>
		  				<CustomIcon name="next" />
		  			</View>
		  			<View style={styles.SearchContainer}>
		  				<TouchableOpacity><CustomIcon style={styles.searchIcon} name="search-materia"/></TouchableOpacity>
		  				<TextInput style={styles.searchInput} placeholder="Search a item..." placeholderTextColor='#a6a6ad' underlineColorAndroid='transparent'/>
		  			</View>
		  			<GridView style={{marginLeft:15}}
				      data={filter}
				      itemsPerRow={itemRow}
				      renderItem={(item) => {
				        return (
		  			<FilterLabels data={item} />
		  			 );
				      }}
				      />
				    <ProductRow/>
				    <View style={styles.loadingIconContainer}>
				    	<TouchableOpacity><Image style={styles.loadingIcon} source={require('../../../assests/images/loadingIcon.png')}/></TouchableOpacity>
				    </View> 
				    <TouchableOpacity style={styles.loadingButtonContainer}>
				    	<Text style={styles.viewallText}>Loading of 2,345 more items</Text>
				    </TouchableOpacity>
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
				marginLeft:70,
			},
			labelIcon:{
				marginLeft:30,
				height:18,
				width:18,
			},
		   subProductContainer:{
		   		padding:20,
				flexDirection:'row',
				backgroundColor:'#67b0d6',
				flexDirection:'row',
				justifyContent:'space-between',
		   },
		   casualText:{
		   	color:'#fff',
				fontFamily:'myrid',
				fontSize:17,
				fontWeight:'bold',
		   },
		  SearchContainer:{
		  	flexDirection:'row',
		  	backgroundColor:'#fff',
		  	elevation:3,
		  },
		  searchInput:{
		  	width:250,
		  	marginLeft:40,
		  	fontSize:18,
		  },
		  searchIcon:{
		  	marginTop:15,
		  	marginLeft:20,
		  },
		  productImage:{
		  	resizeMode:'cover',
		  	height:180,
		  	width:80,
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
		  	marginTop:20,
		  	marginBottom:20,
		  	borderRadius:5,
		  },
		  viewallText:{
		  	color:'#a6a6ad',
		  	fontSize:13,
		  }
		})