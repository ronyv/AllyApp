/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const ChildObjective = props => {
  return (
    <View style={styles.objectiveDiv}>
      <Text>{props.index + '. '}</Text>
      <Text>{props.objective.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  objectiveDiv: {
    padding: 5,
    margin: 5,
    display: 'flex',
    flexDirection: 'row',
  },
});

export default ChildObjective;
