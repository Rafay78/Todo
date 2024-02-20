import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

const AddItem = props => {
  const {onChange, handleAddOrEdit, text, selectedIndex} = props;

  return (
    <View>
      <TextInput
        style={style.textInput}
        value={text}
        placeholder="Add Some things please..."
        onChangeText={onChange}
      />

      <TouchableOpacity onPress={() => handleAddOrEdit(text)}>
        <Text style={style.btnText}>
          <Entypo /*onPress={onPressCheck}*/ name="plus" size={20}></Entypo>{' '}
          {selectedIndex || selectedIndex == 0 ? 'Edit Item' : 'Add Item'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  textInput: {
    padding: 20,
    borderRadius: 20 / 3,
  },
  btnText: {
    textAlign: 'center',
  },
});
export default AddItem;
