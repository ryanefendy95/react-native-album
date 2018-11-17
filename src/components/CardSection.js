import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
});

const CardSection = props => (
  <View style={styles.containerStyle}>{props.children}</View>
);

export default CardSection;
