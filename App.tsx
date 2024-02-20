import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
  FlatList,
} from 'react-native';
import Header from './src/Home';
import Entypo from 'react-native-vector-icons/Entypo';
import AddItem from './src/Additem';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const ListItem = props => {
  const {handleEditItem, data, index, handlDeleteItem} = props;
  return (
    <View style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}>{data?.text}</Text>
        <View style={styles.listItemView}>
          <TouchableOpacity
            onPress={() => {
              handleEditItem(data?.text, index);
              // handleEditItem({
              //   id: props.data.id,
              //   text: props.data.text,
              // });
            }}>
            <Entypo color="black" name="pencil" size={15} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              handlDeleteItem(props.data.id);
            }}>
            <Entypo
              style={styles.cross}
              color="red "
              name="circle-with-cross"
              size={15}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const App = () => {
  const [items, setItems] = useState([
    {id: 12, text: 'Milk'},
    {id: 23, text: 'Eggs'},
    {id: 14, text: 'Meat'},
    {id: 19, text: 'Bread'},
    {id: 20, text: 'Juice'},
  ]);

  const [text, setText] = useState('');

  const [selectedIndex, setSelectedIndex] = useState(null);

  const handlDeleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(singleItem => singleItem.id != id);
    });
  };

  const handleEditItem = (val: string, index: number) => {
    setText(val);
    setSelectedIndex(index);
  };

  const handleAddItems = itemName => {
    setItems(prevItems => {
      const id = Math.random() * 100;
      return [{id: id, text: itemName}, ...prevItems];
    });

    handleClearInput();
  };

  const handleClearInput = () => {
    setText('');
  };

  const handleAddOrEdit = (val: string) => {
    if (selectedIndex || selectedIndex == 0) {
      // update
      handleEdit(val);
      console.log('I am editing');
    } else {
      handleAddItems(val);
      console.log('I am adding, ');
    }
  };

  const handleEdit = (val: string) => {
    let temp = items;
    console.log(temp[selectedIndex]);
    temp[selectedIndex] = {...temp[selectedIndex], text: val};

    setItems(temp);

    setSelectedIndex(null);
    handleClearInput();
  };

  // handle Change in input
  const onChange = textValue => {
    return setText(textValue);
  };

  return (
    <View style={styles.container}>
      <Header name="Rafay" />
      <AddItem
        onChange={onChange}
        text={text}
        handleAddOrEdit={handleAddOrEdit}
        selectedIndex={selectedIndex}
      />
      <FlatList
        data={items}
        renderItem={({item, index}) => (
          <ListItem
            data={item}
            index={index}
            handleEditItem={handleEditItem}
            handlDeleteItem={handlDeleteItem}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  listItem: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 10,
    borderColor: '#eee',
    borderRadius: 10 / 2,
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItemText: {
    fontSize: 20,
  },
  cross: {
    justifyContent: 'flex-end',
    padding: 5,
  },
});

export default App;
