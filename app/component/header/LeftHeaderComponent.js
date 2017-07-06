import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import CustomIcon from '../icon';

const styles = StyleSheet.create({
  menuIcon: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 15,
  },
});

class LeftHeaderComponent extends React.Component {
  render() {
    const { name } = this.props;

    return (
      <TouchableOpacity style={styles.menuIcon}>
        <CustomIcon name={name} />
      </TouchableOpacity>
    );
  }
}

export default LeftHeaderComponent;
