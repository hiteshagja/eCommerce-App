import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Text,
} from 'react-native';

import CustomIcon from '../icon';

const styles = StyleSheet.create({
  menuIcon: {
    flex: 1,
    alignItems:'center',
    marginLeft: 15,
    position:'relative',
    paddingTop:10,
    paddingRight:8
  },
  rightHeader:{
    flexDirection:'row',
  },
  settingImages:{
    height:15,
    width:15,
  },
  notificationContainer:{
    backgroundColor:'#fff',
    height:12,
    padding:5,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5,
    position:'absolute',
    zIndex:999,
    top:8,
    left:10,
  },
  notificationText:{
    fontSize:10,
    fontWeight:'bold',
  }

});

class RightHeaderComponent extends React.Component {
  render() {
    const { icon1, icon2, image, notification } = this.props;

    return (
      <View style={styles.rightHeader}>
      <TouchableOpacity style={styles.menuIcon}>
        <CustomIcon name={icon1} />
        { notification !=null ?
         <View style={styles.notificationContainer}>
            <Text style={styles.notificationText}>3</Text>
        </View>
        :
            <View/>
        }   
      </TouchableOpacity>
      { 
        icon2 != null ?
        <TouchableOpacity style={styles.menuIcon}>
        <CustomIcon name={icon2} />
        </TouchableOpacity>
      :
        <View/>
      }
      {
        image != null ?
          <TouchableOpacity style={styles.menuIcon}>
           <Image style={styles.settingImages} source={require('../../../assests/images/settings.png')}/>
          </TouchableOpacity>
        :
        <View/>
      }
       
      </View>
    );
  }
}

export default RightHeaderComponent;
