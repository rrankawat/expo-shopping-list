import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types';
import { FontAwesome } from '@expo/vector-icons'; 

const AddItem = ({ addItem }) => {
  const [text, setText] = useState('')

  return (
    <View style={styles.header}>
      <TextInput 
        placeholder='Add Item' 
        style={styles.input}
        onChangeText={(textValue) => setText(textValue)} 
      />
      <TouchableOpacity style={styles.btn} onPress={() => addItem(text)}>
        <Text style={styles.btnText}>
          <FontAwesome name='plus' size={20} /> Add
        </Text>
      </TouchableOpacity>
    </View>
  )
}

AddItem.proptypes = {
  addItem: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16
  },
  btn: {
    backgroundColor: '#c2bad8',
    padding: 9,
    margin: 5
  },
  btnText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center'
  }
})

export default AddItem
