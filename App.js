import React, { useState } from 'react'
import { View, StyleSheet, FlatList, Alert } from 'react-native'
import { v4 } from 'uuid'

import Header from './components/Header'
import ListItem from './components/ListItem'
import AddItem from './components/AddItem'

const App = () => {
  const [items, setItems] = useState([
    { id: v4(), text: 'Milk' },
    { id: v4(), text: 'Eggs' },
    { id: v4(), text: 'Bread' },
    { id: v4(), text: 'Juice' },
  ])

  const deleteItem = (id) => 
    setItems( prevItems => prevItems.filter( item => item.id !== id ) )
  

  const addItem = (text) => {
    if(text === '') {
      Alert.alert('Error', 'Please enter an item')
    } else {
      setItems(prevItems => [{id: v4(), text}, ...prevItems])
    }
  }

  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem} />
      <FlatList data={items} renderItem={({ item }) => <ListItem item={item} deleteItem={deleteItem} />} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    paddingTop: 60
  },
})

export default App
