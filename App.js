/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

import * as CommonConstants from './src/common/CommonConstants';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {fetchOKRs} from './src/utils/ApiHelper';
import {formatData} from './src/utils/DataFormatter';
import ParentObjective from './src/components/ParentObjective';
import SelectDropdown from 'react-native-select-dropdown';

const App = () => {
  // state variables
  const [filter, setFilter] = useState(null);
  const [objectives, setObjectives] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  useEffect(() => {
    console.log('useEffect');

    // fetch data from api.
    setLoading(true);
    fetchOKRs()
      .then(res => {
        console.log('fetchOKRs: ', res);
        let formattedList = formatData(res);
        setObjectives(formattedList);
        setFilteredList(formattedList);
      })
      .catch(err => {
        console.log('fetchOKRs: Error: ', err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // set filter.
  const onFilterChange = newFilter => {
    console.log('onFilterChange: ', newFilter);
    setFilter(newFilter);
    setSelectedId(null);

    if (newFilter === 'ALL') {
      setFilteredList(objectives);
    } else {
      setFilteredList(objectives.filter(item => item.category === newFilter));
    }
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          {loading && <ActivityIndicator />}

          <View style={styles.headingContainer}>
            <View style={styles.headingItem}>
              <Text style={styles.headingTxt}>Objectives</Text>
            </View>
            <View style={styles.headingItem}>
              <SelectDropdown
                data={CommonConstants.FILTERS}
                defaultButtonText="Select Category"
                buttonStyle={{
                  margin: 1,
                  borderWidth: 1,
                  borderColor: 'black',
                }}
                onSelect={(selectedItem, index) => {
                  onFilterChange(selectedItem);
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  // text represented after item is selected
                  // if data array is an array of objects then return selectedItem.property to render after item is selected
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  // text represented for each item in dropdown
                  // if data array is an array of objects then return item.property to represent item in dropdown
                  return item;
                }}
              />
            </View>
          </View>

          <View>
            {filteredList &&
              filteredList.length > 0 &&
              filteredList.map((item, index) => (
                <ParentObjective
                  key={item.id}
                  objective={item}
                  index={index + 1}
                  selected={selectedId === item.id}
                  onSelect={id => setSelectedId(id)}
                />
              ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  headingContainer: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'black',
    height: 50,
    alignItems: 'center',
  },
  headingItem: {
    flexBasis: 'auto',
    flexGrow: 1,
    flexShrink: 1,
    padding: 10,
  },
  headingTxt: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
