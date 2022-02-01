import React from 'react'
import {View, FlatList, ImageBackground,Image, StatusBar, Dimensions } from 'react-native'
import CarItem from './src/components/CarItem'
import {styles} from './src/global/styles'
import { images } from './src/assets/images'
import { carsList } from './src/constants/CarsList'
import Header from './src/components/Header'

const App = () => {

  return (
      <View style={{
        flex:1,
        backgroundColor:'#888',
        alignItems:'center',
        justifyContent:'center'
      }}>
        <Header />
        <FlatList
        showsVerticalScrollIndicator={false}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height}
          data={carsList}
          renderItem={({item}) =>{
            return <CarItem 
              name ={item.name}
              price = {item.price}
              img={item.img}
            />
          }}
        />
      </View>
  )
}

export default App
