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
import ChildObjective from './ChildObjective';

const ParentObjective = props => {
  useEffect(() => {
    // console.log('ParentObjective', props);
  });

  return (
    <TouchableOpacity onPress={() => props.onSelect(props.objective.id)}>
      <View style={styles.mainDiv}>
        <View
          style={[
            styles.objectiveDiv,
            {backgroundColor: props.selected ? '#D8D8D8' : 'white'},
          ]}>
          <Text>{props.index + '. '}</Text>
          <Text>{props.objective.title}</Text>
        </View>

        {props.selected && (
          <View style={styles.childDiv}>
            {props.objective &&
              props.objective.children &&
              props.objective.children.map((child, index) => (
                <ChildObjective
                  key={child.id}
                  index={props.index + '.' + (index + 1)}
                  objective={child}
                />
              ))}
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainDiv: {
    borderWidth: 2,
    borderColor: 'grey',
    padding: 5,
    margin: 5,
  },
  objectiveDiv: {
    display: 'flex',
    flexDirection: 'row',
  },
  childDiv: {
    marginTop: 5,
    display: 'flex',
    borderColor: '#BEBEBE',
  },
});

export default ParentObjective;
